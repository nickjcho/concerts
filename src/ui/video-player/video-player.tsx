'use client';

import styles from './video-player.module.scss';
import { Video } from '@/models/video';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import { Navigation } from 'swiper/modules';

export default function VideoPlayer({ videos }: { videos: Video[] }) {
  return (
    <div className={styles.card}>
      <Swiper
        modules={[Navigation]}
        navigation
      >
        {videos.map((video: Video) => {
          return (
            <SwiperSlide key={video.title}>
              <div className={styles.video_title}>{video.title}</div>
              <video className={styles.video} controls>
                <source
                  src={video.src}
                  type="video/mp4" /> 
                Your browser does not support the video tag.
              </video>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  )
}