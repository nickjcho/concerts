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
];

export const welcomeNotes: string[] = [
  "Welcome to Zeeno's House! I'm Zeeno, and here you can explore all of the concerts that I have been to throughout the years",
  "There's a lot to explore, so feel free to click around and check things out! Do you recognize any of these artists"
];