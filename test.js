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
        info: ["info1 ", "info2", "info3"],
        link: "https://myanimelist.net/character/80243/Shouko_Nishimiya"
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
        info: ["info1", "info2", "info3"],
        link: "https://myanimelist.net/character/4604/Nagisa_Furukawa"
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
        info: ["info1", "info2", "info3"],
        link: "https://myanimelist.net/character/37832/Madoka_Kaname"
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
        info: ["info1", "info2", "info3"],
        link: "https://myanimelist.net/character/52723/Kosaki_Onodera"
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
        info: ["info1", "info2", "info3"],
        link: "https://myanimelist.net/character/40592/Meiko_Honma"
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
        info: ["info1", "info2", "info3"],
        link: "https://myanimelist.net/character/61371/Mashiro_Shiina"
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
        info: ["info1", "info2", "info3"],
        link: "https://myanimelist.net/character/65259/Tooka_Yatogami"
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
        info: ["info1", "info2", "info3"],
        link: "https://myanimelist.net/character/32884/Rea_Sanka"
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
        info: ["info1", "info2", "info3"],
        link: "https://myanimelist.net/character/48391/Chitoge_Kirisaki"
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
        info: ["info1", "info2", "info3"],
        link: "https://myanimelist.net/character/124049/Isla"
    },
    {
        personality: 11,
        appearance: 15,
        voice: 9,
        name: "Tachibana Kanade",
        anime: "Angel Beats!",
        avt: [
            "url('https://i.pinimg.com/originals/47/44/5b/47445bdf7c3991a65e2c2bd92a21ca08.jpg')",
            "url('https://i.pinimg.com/originals/2c/37/00/2c370043956815a2c1056e2e621118af.jpg')",
            "url('https://i.pinimg.com/originals/93/32/65/933265e897663478f31fc15a6c72f850.jpg')",
            "url('https://i.pinimg.com/originals/3b/9c/b1/3b9cb118955a0908e42667e2397aa942.gif')"
        ],
        bg: "url('https://i.pinimg.com/originals/ae/0b/83/ae0b8342ae4fb78abe7f0204e2861fe4.jpg')", 
        audio: "https://feeds.soundcloud.com/stream/1493606920-corona-689894639-chika-noise-1.mp3",
        info: ["info1", "info2", "info3"],
        link: "https://myanimelist.net/character/22369/Kanade_Tachibana"
    },
    {
        personality: 12,
        appearance: 12,
        voice: 6,
        name: "Nakano Miku",
        anime: "Gotoubun no Hanayome",
        avt: [
            "url('https://i.pinimg.com/originals/1d/00/0b/1d000b1c3ff152042933fb58209b66ac.jpg')",
            "url('https://i.pinimg.com/originals/6d/63/35/6d63354de46ea9b9a7aff3a26a2233a1.jpg')",
            "url('https://i.pinimg.com/originals/97/30/e7/9730e7ea84718c892a356a60a3f90328.jpg')",
            "url('https://i.pinimg.com/originals/f6/0c/66/f60c663ebcc96e520d29c47a1d9c4ecb.gif')"
        ],
        bg: "url('https://i.pinimg.com/originals/29/bd/11/29bd11aa3d4f833b982fb4c2b76fa086.jpg')", 
        audio: "https://feeds.soundcloud.com/stream/1493606920-corona-689894639-chika-noise-1.mp3",
        info: ["info1", "info2", "info3"],
        link: "https://myanimelist.net/character/160603/Miku_Nakano"
    },
    {
        personality: 13,
        appearance: 9,
        voice: 19,
        name: "Otosaka Ayumi",
        anime: "Charlotte",
        avt: [
            "url('https://i.pinimg.com/originals/82/49/41/824941fc89053db189092c5ba7243759.jpg')",
            "url('https://i.pinimg.com/originals/4d/98/ed/4d98ed85e7b58b8643098e612fac47da.jpg')",
            "url('https://i.pinimg.com/originals/45/1d/b6/451db6d9fc64e6ff52967e27d7755eb5.jpg')",
            "url('https://i.pinimg.com/originals/b7/c8/99/b7c8997c087252bfc316c3b8121f9e3a.gif')"
        ],
        bg: "url('https://i.pinimg.com/originals/c6/cf/0b/c6cf0bb79b4876faf17780ad5333dc55.jpg')", 
        audio: "https://feeds.soundcloud.com/stream/1493606920-corona-689894639-chika-noise-1.mp3",
        info: ["info1", "info2", "info3"],
        link: "https://myanimelist.net/character/129120/Ayumi_Otosaka"
    },
    {
        personality: 14,
        appearance: 7,
        voice: 15,
        name: "Itsuka Kotori",
        anime: "Date A Live",
        avt: [
            "url('https://i.pinimg.com/originals/14/f1/9c/14f19cc3d947cee1369a2cf49ce0be68.jpg')",
            "url('https://i.pinimg.com/originals/41/0c/32/410c32ab98b5f1c29b67cff1e2fef4d4.jpg')",       
            "url('https://i.pinimg.com/originals/ee/1a/15/ee1a155addfe110d4ac1d532733bd3f0.jpg')",
            "url('https://i.pinimg.com/originals/97/9d/f8/979df8bfa0a7e782e1a23def29b6a878.gif')"
        ],
        bg: "url('https://i.pinimg.com/originals/ab/1c/1a/ab1c1abff26dc94f5c013598ef58e684.png')", 
        audio: "https://feeds.soundcloud.com/stream/1493606920-corona-689894639-chika-noise-1.mp3",
        info: ["info1", "info2", "info3"],
        link: "https://myanimelist.net/character/65263/Kotori_Itsuka"
    },
    {
        personality: 15,
        appearance: 4,
        voice: 22,
        name: "Hoshino Ruby",
        anime: "Oshi no Ko",
        avt: [
            "url('https://i.pinimg.com/originals/8f/6f/c1/8f6fc148af4d22d27f0e86510bd0c501.jpg')",
            "url('https://i.pinimg.com/originals/3d/15/bc/3d15bc3fb6bc4ad2aaf83070fe1d96eb.jpg')",
            "url('https://i.pinimg.com/originals/59/ab/fa/59abfa515d8ef0cc87d81c9833be7103.jpg')",
            "url('https://i.pinimg.com/originals/e3/f6/49/e3f649e79bc308992f579aad10f9d7b3.gif')"
        ],
        bg: "url('https://i.pinimg.com/originals/c3/96/38/c3963806f9f3aad56b61b94dd377dd25.jpg')", 
        audio: "https://feeds.soundcloud.com/stream/1493606920-corona-689894639-chika-noise-1.mp3",
        info: ["info1", "info2", "info3"],
        link: "https://myanimelist.net/character/186921/Ruby_Hoshino"
    },
    {
        personality: 16,
        appearance: 20,
        voice: 25,
        name: "Iino Miko",
        anime: "Kaguya Sama: Love is War",
        avt: [
            "url('https://i.pinimg.com/originals/3f/68/cc/3f68ccf8f608d3e17ed974478690c1ac.jpg')",
            "url('https://i.pinimg.com/originals/2b/eb/76/2beb76758f9590a8e8fe41f2d29b6c40.jpg')",
            "url('https://i.pinimg.com/originals/c0/ce/ba/c0ceba69e2c119c466924137faa85936.jpg')",
            "url('https://i.pinimg.com/originals/e6/83/b4/e683b468906c8592e1da38394801178f.gif')"
        ],
        bg: "url('https://i.pinimg.com/originals/52/db/ab/52dbab087fffd72aa2c28cbe68a82c82.jpg')", 
        audio: "https://feeds.soundcloud.com/stream/1493606920-corona-689894639-chika-noise-1.mp3",
        info: ["info1", "info2", "info3"],
        link: "https://myanimelist.net/character/152052/Miko_Iino"
    },
    {
        personality: 17,
        appearance: 17,
        voice: 20,
        name: "Emilia",
        anime: "Re:Zero",
        avt: [
            "url('https://i.pinimg.com/originals/ed/a2/f1/eda2f1681a679d941eb1eb44087c2f1d.jpg')",
            "url('https://i.pinimg.com/originals/e1/53/a8/e153a8ec8fe4a9aab6843bca96b2a7d7.jpg')",
            "url('https://i.pinimg.com/originals/d0/30/ee/d030ee769dbda672f92f05fb141c2e4b.jpg')",
            "url('https://i.pinimg.com/originals/26/9e/79/269e798722c9eab14320ad4b5c1e8272.gif')"
        ],
        bg: "url('https://i.pinimg.com/originals/98/fa/9d/98fa9d624cf4c5076fa090d049d5d729.jpg')", 
        audio: "https://feeds.soundcloud.com/stream/1493606920-corona-689894639-chika-noise-1.mp3",
        info: ["info1", "info2", "info3"],
        link: "https://myanimelist.net/character/118737/Emilia"
    },
    {
        personality: 18,
        appearance: 21,
        voice: 17,
        name: "Kuriyama Mirai",
        anime: "Kyoukai no Kanata",
        avt: [
            "url('https://i.pinimg.com/originals/32/3a/0a/323a0abe53856ef07526915033845947.jpg')",
            "url('https://i.pinimg.com/originals/a4/c9/c4/a4c9c4d89ff2773d3ad59b5c3941093b.jpg')",
            "url('https://i.pinimg.com/originals/3e/47/a2/3e47a23cd80796c736ae900530658a37.jpg')",
            "url('https://i.pinimg.com/originals/a6/14/e9/a614e9cc50be9cfdbe1e673c2561ebeb.gif')"
        ],
        bg: "url('https://i.pinimg.com/originals/38/53/0a/38530ae82519ebd30ee8d704703c3bbe.jpg')", 
        audio: "https://feeds.soundcloud.com/stream/1493606920-corona-689894639-chika-noise-1.mp3",
        info: ["info1", "info2", "info3"],
        link: "https://myanimelist.net/character/81751/Mirai_Kuriyama"
    },
    {
        personality: 19,
        appearance: 26,
        voice: 11,
        name: "Takanashi Rikka",
        anime: "Chuunibyou demo Koi ga Shitai!",
        avt: [
            "url('https://i.pinimg.com/originals/9e/df/82/9edf82736c0a74ef6cc6a7cd60244450.jpg')",
            "url('https://i.pinimg.com/originals/83/eb/54/83eb5441cfeaeeb0ee61a16204e3b599.jpg')",
            "url('https://i.pinimg.com/originals/78/f9/2b/78f92b1e78dd59e45e4b0d234528bc32.jpg')",
            "url('https://i.pinimg.com/originals/df/0f/99/df0f99889a73fc7256c68eee6582f95a.gif')"
        ],
        bg: "url('https://i.pinimg.com/originals/46/1e/ad/461eadc5d2d55705c9eaa689d960d147.jpg')", 
        audio: "https://feeds.soundcloud.com/stream/1493606920-corona-689894639-chika-noise-1.mp3",
        info: ["info1", "info2", "info3"],
        link: "https://myanimelist.net/character/65865/Rikka_Takanashi"
    },
    {
        personality: 20,
        appearance: 8,
        voice: 28,
        name: "Nao Tomori",
        anime: "Charlotte",
        avt: [
            "url('https://i.pinimg.com/originals/d3/7f/5d/d37f5d0b84a168aa9372eb8e2a8ce843.jpg')",
            "url('https://i.pinimg.com/originals/7f/1e/75/7f1e75c74f2af708172060fd638a83d3.jpg')",
            "url('https://i.pinimg.com/originals/c3/66/18/c366182db37dd7b23466c57ff601dfe7.jpg')",
            "url('https://i.pinimg.com/originals/74/59/ae/7459ae18669030c09daba8ca66b83931.gif')"
        ],
        bg: "url('https://i.pinimg.com/originals/a3/19/70/a31970be628d97f9cc36ca7d6e5cc9cd.jpg')", 
        audio: "https://feeds.soundcloud.com/stream/1493606920-corona-689894639-chika-noise-1.mp3",
        info: ["info1", "info2", "info3"],
        link: "https://myanimelist.net/character/122211/Nao_Tomori"
    },
    {
        personality: 21,
        appearance: 11,
        voice: 21,
        name: "Nakano Itsuki",
        anime: "Gotoubun no Hanayome",
        avt: [
            "url('https://i.pinimg.com/originals/ac/61/8a/ac618a562ff21734a13de9abd20e7388.jpg')",
            "url('https://i.pinimg.com/originals/dd/0a/6f/dd0a6fd9a35b543394b1e08b0fc22477.jpg')",
            "url('https://i.pinimg.com/originals/b9/51/97/b9519781b6de4d68a7062a3b121aecaf.jpg')",
            "url('https://i.pinimg.com/originals/06/fb/b8/06fbb8809e4a2967f7785ecef29abf03.gif')"
        ],
        bg: "url('https://i.pinimg.com/originals/0f/f3/60/0ff360e3ccf2913bd0722d1660b60645.jpg')", 
        audio: "https://feeds.soundcloud.com/stream/1493606920-corona-689894639-chika-noise-1.mp3",
        info: ["info1", "info2", "info3"],
        link: "https://myanimelist.net/character/161471/Itsuki_Nakano"
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
        info: ["info1", "info2", "info3"],
        link: "https://myanimelist.net/character/124037/Yusa_Kurobane"
    },
    {
        personality: 23,
        appearance: 3,
        voice: 7,
        name: "Illyasviel von Einzbern",
        anime: "Fate/Stay Night",
        avt: [
            "url('https://i.pinimg.com/originals/1b/36/8c/1b368c4a5da71c8637cef2e161fdab60.jpg')",
            "url('https://i.pinimg.com/originals/1e/45/55/1e45557fb62875b00b801d83b5f5e4f6.jpg')",
            "url('https://i.pinimg.com/originals/dc/c0/98/dcc0984a5f2f2cb15218317e1ea652cc.jpg')",
            "url('https://i.pinimg.com/originals/40/5a/af/405aafa6115504126fdcdbd58822bc8b.gif')"
        ],
        bg: "url('https://i.pinimg.com/originals/91/92/36/919236b1772a23bd465836898b2e5840.jpg')", 
        audio: "https://feeds.soundcloud.com/stream/1493606911-corona-689894639-rikka-noise-1.mp3",
        info: ["info1", "info2", "info3"],
        link: "https://myanimelist.net/character/503/Illyasviel_von_Einzbern"
    },
    {
        personality: 24,
        appearance: 14,
        voice: 2,
        name: "Shiro",
        anime: "No Game No Life",
        avt: [
            "url('https://i.pinimg.com/originals/06/c3/ae/06c3ae49a637dfc35c3c279bc43746bb.jpg')",
            "url('https://i.pinimg.com/originals/ad/99/b8/ad99b85822f2b5cc5ad9fb89b176b012.jpg')",
            "url('https://i.pinimg.com/originals/43/14/a9/4314a9a25d822540ac8aed4f523c077b.jpg')",
            "url('https://i.pinimg.com/originals/78/00/c8/7800c885528eb9cee3bc4f9d132f75c1.gif')"
        ],
        bg: "url('https://i.pinimg.com/originals/bc/36/66/bc3666d2cfc0296ff03cfea8a72577be.jpg')", 
        audio: "https://feeds.soundcloud.com/stream/1493606911-corona-689894639-rikka-noise-1.mp3",
        info: ["info1", "info2", "info3"],
        link: "https://myanimelist.net/character/82525/Shiro"
    },
    {
        personality: 25,
        appearance: 19,
        voice: 26,
        name: "Hayasaka Ai",
        anime: "Kaguya Sama: Love is War",
        avt: [
            "url('https://i.pinimg.com/originals/46/1d/b3/461db313fa25bd37cc7ae766051b8569.jpg')",
            "url('https://i.pinimg.com/originals/1d/7d/75/1d7d75ab0030b6b440a4ae9945e706c9.jpg')",
            "url('https://i.pinimg.com/originals/aa/0b/44/aa0b44bf076f0b2017afc2d37dc5b0cf.jpg')",
            "url('https://i.pinimg.com/originals/a6/ad/5a/a6ad5afb1d82e0dbafd4ed76239979ad.gif')"
        ],
        bg: "url('https://i.pinimg.com/originals/d7/5f/1b/d75f1b0e5d29f2a4e268a0b399bea7b1.jpg')", 
        audio: "https://feeds.soundcloud.com/stream/1493606911-corona-689894639-rikka-noise-1.mp3",
        info: ["info1", "info2", "info3"],
        link: "https://myanimelist.net/character/143196/Ai_Hayasaka"
    },
    {
        personality: 26,
        appearance: 27,
        voice: 5,
        name: "Kaguya Shinomiya",
        anime: "Kaguya Sama: Love is War",
        avt: [
            "url('https://i.pinimg.com/originals/a5/8b/ec/a58becb9b590624cb5ddd3a0cd6a44f5.jpg')",
            "url('https://i.pinimg.com/originals/f2/d1/33/f2d133417e828c348a9eebb7493a49ef.jpg')",
            "url('https://i.pinimg.com/originals/11/bb/95/11bb955b807b37962966076cf5894100.jpg')",
            "url('https://i.pinimg.com/originals/d4/17/b2/d417b2934eb1bffa01401f18a79ecf23.gif')"
        ],
        bg: "url('https://i.pinimg.com/originals/a9/27/e8/a927e8d6edacb4ac037834b6a0ed163f.jpg')", 
        audio: "https://feeds.soundcloud.com/stream/1493606911-corona-689894639-rikka-noise-1.mp3",
        info: ["info1", "info2", "info3"],
        link: "https://myanimelist.net/character/136359/Kaguya_Shinomiya"
    },
    {
        personality: 27,
        appearance: 16,
        voice: 24,
        name: "Tohsaka Rin",
        anime: "Fate/ Stay Night",
        avt: [
            "url('https://i.pinimg.com/originals/e9/22/9e/e9229e08fad5626b581a728e1a79213b.jpg')",
            "url('https://i.pinimg.com/originals/59/e2/ce/59e2ce8a9b1eff5e4d79fc43fcd5d9f3.jpg')",
            "url('https://i.pinimg.com/originals/ac/8d/bb/ac8dbb5902961b85fe44b3b6a6d02c8c.jpg')",
            "url('https://i.pinimg.com/originals/f7/17/d8/f717d8f46146cfcc5f4c3a968eb043fd.gif')"
        ],
        bg: "url('https://i.pinimg.com/originals/18/73/24/1873240d0a4231c40684501965fce2c0.jpg')", 
        audio: "https://feeds.soundcloud.com/stream/1493606911-corona-689894639-rikka-noise-1.mp3",
        info: ["info1", "info2", "info3"],
        link: "https://myanimelist.net/character/498/Rin_Toosaka"
    },
    {
        personality: 28,
        appearance: 22,
        voice: 29,
        name: "Saber",
        anime: "Fate/ Stay Night",
        avt: [
            "url('https://i.pinimg.com/originals/6f/65/ec/6f65ec5d46f1423b0e01f416dabbd4aa.jpg')",
            "url('https://i.pinimg.com/originals/2d/3f/f4/2d3ff41f530ef9d6e19fcb5fa5045826.jpg')",
            "url('https://i.pinimg.com/originals/c0/1d/87/c01d874fd73c24bb00e16e4f3239a51c.jpg')",
            "url('https://i.pinimg.com/originals/5c/af/2e/5caf2e8503ea4acc3667a60d3b5a3fa9.gif')"
        ],
        bg: "url('https://i.pinimg.com/originals/85/98/13/859813be1b04baee1fcaf8998a8d4a47.jpg')", 
        audio: "https://feeds.soundcloud.com/stream/1493606911-corona-689894639-rikka-noise-1.mp3",
        info: ["info1", "info2", "info3"],
        link: "https://myanimelist.net/character/497/Saber"
    },
    {
        personality: 29,
        appearance: 18,
        voice: 4,
        name: "Fuchiwara Chika",
        anime: "Kaguya Sama: Love is War",
        avt: [
            "url('https://i.pinimg.com/originals/e0/51/c9/e051c9768b6d5820dd0dddb9f46ddf79.jpg')",
            "url('https://i.pinimg.com/originals/ef/0a/77/ef0a77694a67fb74e295c80a10afbfec.jpg')",
            "url('https://i.pinimg.com/originals/ce/ee/89/ceee89d1fb083efa718d2b15d3547b87.jpg')",
            "url('https://i.pinimg.com/originals/0b/eb/11/0beb117f878e076ccd8c5f5dae26c77f.gif')"
        ],
        bg: "url('https://i.pinimg.com/originals/0f/4c/5d/0f4c5d201dc528bc79fe74376144a38e.jpg')", 
        audio: "https://feeds.soundcloud.com/stream/1493606911-corona-689894639-rikka-noise-1.mp3",
        info: ["VA: Kohara Konomi <br> Secretaty of Shuchiin Academy student council. Really love gossiping and involving others into her games. She can be annoying sometimes as her boisterous mouth often say bad things about others and she often unexpectedly ruins Kaguya and Shirogane's plan to make the other confess, but there are still moments when she actually showing her care towards her friend, like when she went through all difficulties teaching Shirogane about \"basic human\" skills.", "VA: Kohara Konomi <br> Chika is very cute and has a lot of both kawaii and funny expressions, for me she is the most beautiful girl in Love is war. However there are still many girls in other animes that I find prettier and my impression on her appearance is primarily about her funny \"meme\" face so that's why she is not that high on the list.", "VA: Kohara Konomi <br>  Regarding her voice, it's absolutely max level of cuteness. In most stuations she maintain a happy and cheering tone, but her voice shine most when she is upset and annoyed. It's just sooo entertaining watching secreatary Fujiwara complaining and babbling with an angery voice and that made up the majority of funny moments in the anime."],
        link: "https://myanimelist.net/character/140810/Chika_Fujiwara"
    },
    {
        personality: 30,
        appearance: 10,
        voice: 23,
        name: "Chitanda Eru",
        anime: "Hyouka",
        avt: [
            "url('https://i.pinimg.com/originals/43/9b/8b/439b8bfef32ca21bfe75b37d9e4db601.jpg')",
            "url('https://i.pinimg.com/originals/b9/0e/ce/b90ece1caaedd61b3c5db0a73f36147a.jpg')",
            "url('https://i.pinimg.com/originals/64/f9/8c/64f98c9f4fdd5041520e995c979fc97d.jpg')",
            "url('https://i.pinimg.com/originals/bb/eb/47/bbeb470c2c417c4568acec92e1506a21.gif')"
        ],
        bg: "url('https://i.pinimg.com/originals/1b/27/86/1b2786f1cee290a4b548c46d2b78b37d.jpg')", 
        audio: "https://feeds.soundcloud.com/stream/1493606920-corona-689894639-chika-noise-1.mp3",
        info: ["info1", "info2", "info3"],
        link: "https://myanimelist.net/character/55133/Eru_Chitanda"
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
    document.getElementsByTagName("p")[i].innerHTML = char[i].info[type];
    document.getElementsByClassName("info")[i].href = char[i].link;
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
            document.getElementsByTagName("p")[i].innerHTML = char[i].info[type];
            document.getElementsByClassName("info")[i].href = char[i].link;
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
