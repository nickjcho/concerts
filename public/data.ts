 export interface ConcertData {
  id: number,
  artist_name: string,
  artist_photo: string,
  tour_name: string,
  date: string,
  location: string,
  venue: string,
  album_id: string,
  album_ranking: { track_no: number, rank: number }[],
  concert_notes: string[],
  poster_image: string,
  videos: { title: string, src: string }[]
 }
 
 export const data: ConcertData[] = [
  {
    id: 1,
    artist_name: "BIBI",
    artist_photo: "https://res.cloudinary.com/dnlgbb2ny/image/upload/v1752524563/cropped-bibi-pfp_imuv18.jpg",
    tour_name: "2025 BIBI 1ST WORLD TOUR [EVE]",
    date: "June 24th, 2025",
    location: "Oakland, CA",
    venue: "Paramount Theatre",
    album_id: "4OrisjS1FiGCNucXdwtd3Y",
    album_ranking: [
      { track_no: 1, rank: 5 },
      { track_no: 2, rank: 2 },
      { track_no: 3, rank: 10 },
      { track_no: 4, rank: 6 },
      { track_no: 5, rank: 1 },
      { track_no: 6, rank: 13 },
      { track_no: 7, rank: 3 },
      { track_no: 8, rank: 12 },
      { track_no: 9, rank: 8 },
      { track_no: 10, rank: 9 },
      { track_no: 11, rank: 11 },
      { track_no: 12, rank: 4 },
      { track_no: 13, rank: 7 },
      { track_no: 14, rank: 14 },
    ],
    concert_notes: [
      "Very good live vocals! I didn't exactly go in to the concert expecting top-tier vocals but I was pleasantly surprised at how stable she was despite being sick",
      "We were seated in the balcony, which seemed nice at first until she started walking around the floor area while performing. I felt some intense FOMO from that",
      "The concept film that played in between the concert acts was very atmospheric. I thought her acting was really good, not surprising as I know she did debut as an actress and won a bunch of awards for it already lol"
    ],
    poster_image: "https://res.cloudinary.com/dnlgbb2ny/image/upload/v1752353114/37nmhz40g33f1_ifqvwq.jpg",
    videos: [
      { 
        title: "Hongdae R&B",
        src: "https://res.cloudinary.com/dnlgbb2ny/video/upload/IMG_8850_p5eqvt.mp4"
      },
      { 
        title: "Scott and Zelda",
        src: "https://res.cloudinary.com/dnlgbb2ny/video/upload/v1752308517/IMG_8849_lfykkt.mp4"
      }
    ]
  },
    {
    id: 2,
    artist_name: "Mac Ayres",
    artist_photo: "https://res.cloudinary.com/dnlgbb2ny/image/upload/v1754418968/mac_ayres_thumbnail_cbwito.jpg",
    tour_name: "The Piano Tour",
    date: "March 12th, 2025",
    location: "San Francisco, CA",
    venue: "Great American Music Hall",
    album_id: "07qAkNgFlbkUpIJzT3jtTf",
    album_ranking: [
      { track_no: 1, rank: 5 },
      { track_no: 2, rank: 6 },
      { track_no: 3, rank: 7 },
      { track_no: 4, rank: 8 },
      { track_no: 5, rank: 9 },
      { track_no: 6, rank: 10 },
      { track_no: 7, rank: 11 },
      { track_no: 8, rank: 12 },
      { track_no: 9, rank: 4 },
      { track_no: 10, rank: 13 },
      { track_no: 11, rank: 14 },
      { track_no: 12, rank: 1 },
      { track_no: 13, rank: 15 },
      { track_no: 14, rank: 2 },
      { track_no: 15, rank: 3 },
    ],
    concert_notes: [
      "The atmosphere was so intimate! The smaller venue plus soft lighting with a seated table arrangement lent to a very cozy dinner show vibe that I really enjoyed",
      "Since it was a piano tour, it really was just him and a piano on stage. Since we were pretty close to the stage it was cool to be able to hear his raw voice even without a microphone",
      "The only gripe that I had was that the show was pretty short, maybe about an hour and fifteen minutes? I do understand why though, he was pretty much singing all out nonstop the whole time, and I could tell he was beginning to lose his voice towards the end"
    ],
    poster_image: "https://res.cloudinary.com/dnlgbb2ny/image/upload/v1754418968/mac_ayres_poster_e4gbzi.jpg",
    videos: [
      { 
        title: "Stay",
        src: "https://res.cloudinary.com/dnlgbb2ny/video/upload/v1754419190/IMG_7760_n7fsf8.mov"
      },
      { 
        title: "Easy",
        src: "https://res.cloudinary.com/dnlgbb2ny/video/upload/v1754419167/IMG_7761_bxabbq.mov"
      },
            { 
        title: "Alone With You",
        src: "https://res.cloudinary.com/dnlgbb2ny/video/upload/v1754419166/IMG_7758_fotzsu.mov"
      }
    ]
  },
  {
    id: 3,
    artist_name: "Se So Neon 새소년",
    artist_photo: "https://res.cloudinary.com/dnlgbb2ny/image/upload/v1754424311/IMG_9200_hafe1f.jpg",
    tour_name: "Se So Neon World Tour",
    date: "September 17th, 2023",
    location: "San Francisco, CA",
    venue: "Great American Music Hall",
    album_id: "6BS3zt0gQalEc1R6hVuFP6",
    album_ranking: [
      { track_no: 1, rank: 5 },
      { track_no: 2, rank: 4 },
      { track_no: 3, rank: 2 },
      { track_no: 4, rank: 1 },
      { track_no: 5, rank: 3 },
      { track_no: 6, rank: 6 },
      { track_no: 7, rank: 7 }
    ],
    concert_notes: [
      "Really appreciated the small venue, we were so close to them even though we were in the back! 황소윤's presence is unmatched and I can say now having seen her sing live",
      "Such a powerful sound coming from just three people. There was mostly no backtrack on any of the tracks, so I felt that I really got the raw band soundscape that I usually don't get at concerts",
      "I was about to be so sad that they didn't do their namesake song 새소년, and then they did it for the encore! I still remember how hyped I was hearing the intro and freaking out because I had been waiting for it the entire concert lol"
    ],
    poster_image: "https://res.cloudinary.com/dnlgbb2ny/image/upload/v1754424285/Se_So_Neon_World_Tour_2023_North_America_poster__a2fima.webp",
    videos: [
      { 
        title: "Go Back 집에",
        src: "https://res.cloudinary.com/dnlgbb2ny/video/upload/v1754424230/IMG_1993_gkb6l3.mov"
      },
      { 
        title: "NANCHUN 난춘",
        src: "https://res.cloudinary.com/dnlgbb2ny/video/upload/v1754424237/IMG_1994_fcd81c.mov"
      },
      { 
        title: "Ung 엉",
        src: "https://res.cloudinary.com/dnlgbb2ny/video/upload/v1754424234/IMG_1995_e2atjd.mov"
      },
            { 
        title: "The Wave",
        src: "https://res.cloudinary.com/dnlgbb2ny/video/upload/v1754424229/IMG_1996_xf06va.mov"
      },
            { 
        title: "The Wave (jam)",
        src: "https://res.cloudinary.com/dnlgbb2ny/video/upload/v1754423417/IMG_1997_yzefe6.mov"
      },
            { 
        title: "Jayu 자유",
        src: "https://res.cloudinary.com/dnlgbb2ny/video/upload/v1754424239/IMG_1998_zgstbg.mov"
      },
            { 
        title: "A Long Dream 긴 꿈",
        src: "https://res.cloudinary.com/dnlgbb2ny/video/upload/v1754424233/IMG_1999_gxoepr.mov"
      },
            { 
        title: "New Youth 새소년",
        src: "https://res.cloudinary.com/dnlgbb2ny/video/upload/v1754424237/IMG_2001_gxrpfj.mov"
      },
    ]
  },
  {
    id: 5,
    artist_name: "Umi",
    artist_photo: "https://res.cloudinary.com/dnlgbb2ny/image/upload/v1754948240/cropped-Umi-Rolling-Stone-2_olnade.webp",
    tour_name: "Forest In the City Tour",
    date: "April 26th, 2023",
    location: "San Francisco, CA",
    venue: "The Regency Ballroom",
    album_id: "7ijzh3hVmlwWRxuJGPSoeR",
    album_ranking: [
      { track_no: 1, rank: 15 },
      { track_no: 2, rank: 2 },
      { track_no: 3, rank: 7 },
      { track_no: 4, rank: 1 },
      { track_no: 5, rank: 14 },
      { track_no: 6, rank: 8 },
      { track_no: 7, rank: 13 },
      { track_no: 8, rank: 10 },
      { track_no: 9, rank: 11 },
      { track_no: 10, rank: 3 },
      { track_no: 11, rank: 4 },
      { track_no: 12, rank: 12 },
      { track_no: 13, rank: 6 },
      { track_no: 14, rank: 5 },
      { track_no: 15, rank: 9 },
    ],
    concert_notes: [
      "I remember this was like a week before I left for my Japan trip, so I was wearing a mask because I was scared of getting sick lol. Couldn't miss up the opportunity to see her though, especially since this was a special one-off show that she did after her Coachella performance",
      "I ran into Jordan and Arielle here! I went with Denny but I had no idea that they were also coming. Arielle caught a really cute picture of me and Jordan that she shows me every time we see each other, I thought that was so wholesome",
      "She sounded amazing as usual, I think the set was basically what she did at Coachella because I recognized some of the interlude sections from the Coachella livestream (James talked about it too). She doesn't have a huge discography so I liked that she basically did all of her songs",
      "The highlight of the night was definitely the acoustic version of synergy that she did, which is probably my favorite song off 'Forest in the City', if not out of all of her songs. She has such a spiritual voice that just makes me go ooooooo"
    ],
    poster_image: "https://res.cloudinary.com/dnlgbb2ny/image/upload/v1754948249/forest-in-the-city_orig_h096rw.jpg",
    videos: [
      { 
        title: "sorry",
        src: "https://res.cloudinary.com/dnlgbb2ny/video/upload/v1754948448/IMG_0228_yq4ucj.mov"
      },
      { 
        title: "Down To Earth",
        src: "https://res.cloudinary.com/dnlgbb2ny/video/upload/v1754948449/IMG_0229_ypiptu.mov"
      },
      { 
        title: "Love Affair",
        src: "https://res.cloudinary.com/dnlgbb2ny/video/upload/v1754948718/IMG_0230_qnbbt1.mov"
      },
      { 
        title: "Remember Me",
        src: "https://res.cloudinary.com/dnlgbb2ny/video/upload/v1754948453/IMG_0231_f5ofim.mov"
      },
      { 
        title: "synergy",
        src: "https://res.cloudinary.com/dnlgbb2ny/video/upload/v1754948718/IMG_6330_fu71x1.mov"
      }
    ]
  },
  {
    id: 4,
    artist_name: "Omar Apollo",
    artist_photo: "https://res.cloudinary.com/dnlgbb2ny/image/upload/v1754901155/ab6761610000e5ebae8080a07532b843b42acec1_ipbzw9.jpg",
    tour_name: "Desvelado Tour",
    date: "April 13th, 2022",
    location: "San Francisco, CA",
    venue: "Warfield Theatre",
    album_id: "5z7TD11Qh81Gbf52hd5zAv",
    album_ranking: [
      { track_no: 1, rank: 12 },
      { track_no: 2, rank: 13 },
      { track_no: 3, rank: 6 },
      { track_no: 4, rank: 7 },
      { track_no: 5, rank: 16 },
      { track_no: 6, rank: 1 },
      { track_no: 7, rank: 3 },
      { track_no: 8, rank: 11 },
      { track_no: 9, rank: 5 },
      { track_no: 10, rank: 4 },
      { track_no: 11, rank: 15 },
      { track_no: 12, rank: 14 },
      { track_no: 13, rank: 10 },
      { track_no: 14, rank: 8 },
      { track_no: 15, rank: 2 },
      { track_no: 16, rank: 9 },
    ],
    concert_notes: [
      "I had been wanting to see Omar since he first came to Berkeley to perform in 2018; back then I didn't know who he was so I didn't go! Ever since then I had been really regretful about that, so it was a bit of a cathartic moment to finally get to see him live",
      "This concert had also been delayed a good 6 months or so, I think probably beccause he was working on Ivory. Which was good because yay new music but also I had no time to binge the album before this concert (it had come out like the week before)",
      "One thing that I distinctly remember was how much weed smoke there was at this concert lol. I also remember Amanda asking the guy in front of us if she took take a hit of his joint, which he then let her! He offered the rest of us too but I said no haha",
      "He had great presence throughout the show, and sounded really good throughout what was a pretty long setlist. I was really glad that he did some classics such as Pram and Erase <3 and also basically all of Apolonio"
    ],
    poster_image: "https://res.cloudinary.com/dnlgbb2ny/image/upload/v1754901155/Omar-Apollo-2021-Tour_lk8ifq.webp",
    videos: [
      { 
        title: "Erase",
        src: "https://res.cloudinary.com/dnlgbb2ny/video/upload/v1754901150/IMG_6329_cdrxwl.mov"
      },
      { 
        title: "Killing Me",
        src: "https://res.cloudinary.com/dnlgbb2ny/video/upload/v1754901143/IMG_6330_gkcvv5.mov"
      },
            { 
        title: "Bad Life",
        src: "https://res.cloudinary.com/dnlgbb2ny/video/upload/v1754901927/IMG_6331_ljcvqc.mov"
      }
    ]
  },
    {
    id: 6,
    artist_name: "RINI",
    artist_photo: "https://res.cloudinary.com/dnlgbb2ny/image/upload/v1754976621/cropped-R_B_5A_eo6dv0.jpg",
    tour_name: "Somewhere in Time Tour",
    date: "June 7th, 2025",
    location: "San Francisco, CA",
    venue: "The Regency Ballroom",
    album_id: "14KJbhk4JG4s3Ez0GSxT7Z",
    album_ranking: [
      { track_no: 1, rank: 1 },
      { track_no: 2, rank: 7 },
      { track_no: 3, rank: 6 },
      { track_no: 4, rank: 5 },
      { track_no: 5, rank: 4 },
      { track_no: 6, rank: 3 },
      { track_no: 7, rank: 2 },
    ],
    concert_notes: [
      "Second time seeing Rini! The first concert I went to was a very tiny venue, so it was good to see him fill out a bigger venue like Regency. Very last minute decision to go, but I'm glad I was able to convince Clarissa to go with me",
      "The openers were good, but their sets and then the wait time in between was soooooo long :( I think the concert ended up being about 4 hours in total, I could tell it was a long time because my back hurt a lot by the end",
      "Regardless, really good setlist, he hit all of the important songs lol. Also he did a lot of his collab songs too? I really didn't expect to hear Stay but it was great to hear live",
      "I think compared to the first concert, I might have preferred this one just because he seemed to be in better condition this time. Vocals sounded great and he kept the energy up throughout the whole set",
      "I had been wanting to see Omar since he first came to Berkeley to perform in 2018; back then I didn't know who he was so I didn't go! Ever since then I had been really regretful about that, so it was a bit of a cathartic moment to finally get to see him live"
    ],
    poster_image: "https://res.cloudinary.com/dnlgbb2ny/image/upload/v1754976520/Screenshot_2025-08-11_at_10.24.18_PM_s8nm69.png",
    videos: [
      { 
        title: "Scars",
        src: "https://res.cloudinary.com/dnlgbb2ny/video/upload/v1754976537/IMG_8722_yscmcg.mov"
      },
      { 
        title: "My Luv",
        src: "https://res.cloudinary.com/dnlgbb2ny/video/upload/v1754976556/IMG_8723_nbe8tx.mov"
      },
      { 
        title: "Out of the Blue",
        src: "https://res.cloudinary.com/dnlgbb2ny/video/upload/v1754976569/IMG_8724_bdtdcl.mov"
      },
      { 
        title: "Red Lights",
        src: "https://res.cloudinary.com/dnlgbb2ny/video/upload/v1754976592/IMG_8725_cecds3.mov"
      },
      { 
        title:"Stay",
        src: "https://res.cloudinary.com/dnlgbb2ny/video/upload/v1754977131/IMG_8726_2_ky1fq7.mov"
      },
      { 
        title: "Camped",
        src: "https://res.cloudinary.com/dnlgbb2ny/video/upload/v1754976893/IMG_8727_fkdiao.mov"
      },
      { 
        title: "Emerald",
        src: "https://res.cloudinary.com/dnlgbb2ny/video/upload/v1754976582/IMG_8728_zzu5gx.mov"
      },
      { 
        title:"Aphrodite",
        src: "https://res.cloudinary.com/dnlgbb2ny/video/upload/v1754976614/IMG_8736_kpmxbg.mov"
      },
      { 
        title: "Far Away",
        src: "https://res.cloudinary.com/dnlgbb2ny/video/upload/v1754976567/IMG_8740_a4fpqg.mov"
      },
    ]
  },
  {
    id: 7,
    artist_name: "Emotional Oranges",
    artist_photo: "https://res.cloudinary.com/dnlgbb2ny/image/upload/v1754978127/cropped-tumblr_0aacf4f93b39c462711fea66e220564c_a0ae501b_540_efztce.jpg",
    tour_name: "The Pulp Fiction Tour 2023",
    date: "March 29th, 2023",
    location: "San Francisco, CA",
    venue: "Warfield Theatre",
    album_id: "6q8BNcH6wkWwWC0fGoJwkS",
    album_ranking: [
      { track_no: 1, rank: 7 },
      { track_no: 2, rank: 4 },
      { track_no: 3, rank: 6 },
      { track_no: 4, rank: 8 },
      { track_no: 5, rank: 3 },
      { track_no: 6, rank: 1 },
      { track_no: 7, rank: 2 },
      { track_no: 8, rank: 5 },
    ],
    concert_notes: [
      "Second time seeing Emotional Oranges! I remember after a while of indoctrinating Matt into liking Emotional Oranges he finally agreed to come to this concert with me and Denny hehe",
      "They sounded so good, I really think V is such a good singer :o it sounds like there is autotune on her voice looking back at these videos. I remember that she really likes to do runs in their live performances so it's a completely new experience hearing songs live",
      "Concert so good I bought a hoodie 😩 I still wear it super often too. I'm sooo glad that they did Not Worth It because I remember being really sad when they didn't do it at their previous concert. Such an underrated song"
    ],
    poster_image: "https://res.cloudinary.com/dnlgbb2ny/image/upload/v1754978127/img_0648_nx4ukt.webp",
    videos: [
      { 
        title: "She Got A Man",
        src: "https://res.cloudinary.com/dnlgbb2ny/video/upload/v1754978643/IMG_0132_huxdrr.mov"
      },
      { 
        title: "Not Worth It",
        src: "https://res.cloudinary.com/dnlgbb2ny/video/upload/v1754978670/IMG_0133_2_wmhapc.mov"
      },
      { 
        title: "Sundays",
        src: "https://res.cloudinary.com/dnlgbb2ny/video/upload/v1754978650/IMG_0134_k3nldn.mov"
      },
      { 
        title: "West Coast Love",
        src: "https://res.cloudinary.com/dnlgbb2ny/video/upload/v1754978631/IMG_0135_v2arcn.mov"
      },
    ]
  },
    {
    id: 8,
    artist_name: "wave to earth",
    artist_photo: "https://res.cloudinary.com/dnlgbb2ny/image/upload/v1754979671/cropped-Wave_to_Earth_0.1_Flaws_and_All._promo_photo__281_29_mnmzss.webp",
    tour_name: "North America Tour",
    date: "August 18th, 2023",
    location: "Berkeley, CA",
    venue: "The UC Theatre",
    album_id: "5T0Gt5JYXh6gEttuB8ujML",
    album_ranking: [
      { track_no: 1, rank: 3 },
      { track_no: 2, rank: 7 },
      { track_no: 3, rank: 2 },
      { track_no: 4, rank: 9 },
      { track_no: 5, rank: 13 },
      { track_no: 6, rank: 11 },
      { track_no: 7, rank: 5 },
      { track_no: 8, rank: 4 },
      { track_no: 9, rank: 6 },
      { track_no: 10, rank: 12 },
      { track_no: 11, rank: 10 },
      { track_no: 12, rank: 14 },
      { track_no: 13, rank: 1 },
      { track_no: 14, rank: 8 },
    ],
    concert_notes: [
      "I can be proud to say that I went to wave to earth's first US performance ever! This date was the kickoff to their first American tour and I can tell people were hyped because there were soooo many people (mostly college kids)",
      "I can tell that they were pretty nervous, even Daniel who did most of the talking was pretty curt in all of his talks in between songs. It was kinda cute but also I can tell that there was still a bit of language barrier. But props to them for carrying the whole show without a translator",
      "They sounded great of course, I wish they didn't rely so much on backtrack though. I know that they're only 3 people but I feel like I couldn't really hear the instruments that well. The breakdown of nouvelle vague was awesome though",
      "So glad I brought Jordan to this concert and got him into wave to earth! Always so grateful whenever my friends are down to go to random concerts with me so I love you for that Jordan <3 and now he's a bigger fan than me lol"
    ],
    poster_image: "https://res.cloudinary.com/dnlgbb2ny/image/upload/v1754979672/Wave_to_Earth_North_America_Tour_main_poster_fwtrcp.webp",
    videos: [
      { 
        title: "bad",
        src: "https://res.cloudinary.com/dnlgbb2ny/video/upload/v1754980500/IMG_1727_azyond.mov"
      },
      { 
        title: "peach eyes",
        src: "https://res.cloudinary.com/dnlgbb2ny/video/upload/v1754980510/IMG_1728_jbruhd.mov"
      },
            { 
        title: "seasons",
        src: "https://res.cloudinary.com/dnlgbb2ny/video/upload/v1754980504/IMG_1733_yd4tax.mov"
      }
    ]
  },
    {
    id: 9,
    artist_name: "IU",
    artist_photo: "https://res.cloudinary.com/dnlgbb2ny/image/upload/v1754981538/cropped-IU_The_Winning_album_cover__28Special_ver._29__282_29_r767w1.webp",
    tour_name: "HEREH World Tour",
    date: "July 30th, 2024",
    location: "Oakland, CA",
    venue: "Oakland Arena",
    album_id: "08CvAj58nVMpq1Nw7T6maj",
    album_ranking: [
      { track_no: 1, rank: 2 },
      { track_no: 2, rank: 1 },
      { track_no: 3, rank: 4 },
      { track_no: 4, rank: 3 },
      { track_no: 5, rank: 5 },
    ],
    concert_notes: [
      "I think this experience was really just a childhood dream come true... Honestly when she first came out on stage I couldn't believe that I was seeing her in person after having grown up with her music all throughout my life :')",
      "We were in bleacher seats, but very close to the front so we were actually pretty close to the stage! I was surprised at how well I could see her even without looking at the screens",
      "I think Matt, Francesca and I were just kinda freaking out the whole time to be honest. I was so hyped to hear You and I and Good Day, especially since I had heard that she was retiring her old music. Which was good because those songs were what I came to hear!!",
      "This was my first time at a Kpop concert, so I was surprised at how structured and organized the whole concert set was. It seemed nice actually, especially since there was no waiting around for setup time or openers.. the show basically started right on time"
    ],
    poster_image: "https://res.cloudinary.com/dnlgbb2ny/image/upload/v1754981542/GLMpEqLa0AAQFsB_p0ch82.jpg",
    videos: [
      { 
        title: "Through the Night",
        src: "https://res.cloudinary.com/dnlgbb2ny/video/upload/v1754982426/IMG_4619_lctilo.mov"
      },
      { 
        title: "You and I",
        src: "https://res.cloudinary.com/dnlgbb2ny/video/upload/v1754982459/IMG_4626_rg0wmh.mov"
      },
            { 
        title: "Good Day",
        src: "https://res.cloudinary.com/dnlgbb2ny/video/upload/v1754982443/IMG_4629_oainl3.mov"
      }
    ]
  },
  {
    id: 10,
    artist_name: "2NE1",
    artist_photo: "https://res.cloudinary.com/dnlgbb2ny/image/upload/v1754983190/cropped-cl-shares-new-2ne1-pictures-in-honor-of-their-15th-v0-kohdj0b12t0d1_nqfod8.jpg",
    tour_name: "Head in the Clouds",
    date: "June 1st, 2025",
    location: "Pasadena, CA",
    venue: "The Rose Bowl",
    album_id: "5WyEkWi7ZPMrVSbU1Cabba",
    album_ranking: [
      { track_no: 1, rank: 2 },
      { track_no: 2, rank: 1 },
      { track_no: 3, rank: 5 },
      { track_no: 4, rank: 4 },
      { track_no: 5, rank: 6 },
      { track_no: 6, rank: 7 },
      { track_no: 7, rank: 3 },
    ],
    concert_notes: [
      "This is definitely like a once in a lifetime event for me 🤯🫨 You thought IU was a defining moment in my childhood -- 2NE1 is on a whole other scale. I knew as soon as I saw this lineup drop that I would do anything to go see them, and so I did lol",
      "Their presence was so powerful!! I think them being on tour in Asia prior to this really helped them build up their energy because they were not messing around. Although Bom wasn't there :')) I think the other three definitely gave more than enough to fill her absence",
      "All of the bangers were played, every lyric was sung by me and everyone around me. The mini mosh pit that was formed during Ugly was something that I didn't know I needed. I definitely lost my voice the next day",
      "I think I was in awe at how good Minzy sounded. I know all of them can sing (yes even Dara), but Minzy's voice just had so much power. They were also such fun performers, I loved how they kept walking down the catwalk to interact with people"
    ],
    poster_image: "https://res.cloudinary.com/dnlgbb2ny/image/upload/v1754983191/m4qxvdumuqbmiakzizbp_jx6obn.jpg",
    videos: [
      { 
        title: "Intro + Fire",
        src: "https://res.cloudinary.com/dnlgbb2ny/video/upload/v1754983323/IMG_8636_ximr1g.mov"
      },
      { 
        title: "Clap",
        src: "https://res.cloudinary.com/dnlgbb2ny/video/upload/v1754983286/IMG_8637_tdruxu.mov"
      },
      { 
        title: "Can't Nobody",
        src: "https://res.cloudinary.com/dnlgbb2ny/video/upload/v1754983302/IMG_8638_mp24ra.mov"
      },
      { 
        title: "I Don't Care",
        src: "https://res.cloudinary.com/dnlgbb2ny/video/upload/v1754983336/IMG_8648_ffos8p.mov"
      },
      { 
        title: "I Don't Care (more)",
        src: "https://res.cloudinary.com/dnlgbb2ny/video/upload/v1754983267/IMG_8649_yzsqdb.mov"
      },
      { 
        title: "CL",
        src: "https://res.cloudinary.com/dnlgbb2ny/video/upload/v1754983256/IMG_8650_o9c4ow.mov"
      },
      { 
        title: "Lonely",
        src: "https://res.cloudinary.com/dnlgbb2ny/video/upload/v1754983323/IMG_8651_i41coe.mov"
      },
      { 
        title: "I Am The Best",
        src: "https://res.cloudinary.com/dnlgbb2ny/video/upload/v1754983295/IMG_8658_ihacmf.mov"
      },
      { 
        title: "Go Away",
        src: "https://res.cloudinary.com/dnlgbb2ny/video/upload/v1754983289/IMG_8659_rkgi6s.mov"
      },
    ]
  },
  
];

export const welcomeNotes: string[] = [
  "Welcome to Zeeno's House! I'm Zeeno, and here you can explore all of the concerts that I have been to throughout the years",
  "There's a lot to explore, so feel free to click around and check things out! Do you recognize any of these artists"
];