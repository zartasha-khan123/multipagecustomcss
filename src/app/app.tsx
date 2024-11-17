// pages/_app.tsx
import '@/styles/globals.css';
import { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      {/* Global Background Video */}
      <video
        autoPlay
        loop
        muted
        className="background-video"
      >
        <source src="/vedio/vedio.mp4" type="video/mp4" />
      </video>

      {/* Website Content */}
      <Component {...pageProps} />
    </>
  );
}
