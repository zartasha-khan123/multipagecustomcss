// pages/_app.js
import '@/styles/globals.css';

export default function App({ Component, pageProps }) {
  return (
    <>
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        className="fixed top-0 left-0 w-full h-full object-cover -z-10"
      >
        <source src="/video/background.mp4" type="video/mp4" />
      </video>

      {/* Main Content */}
      <div className="relative">
        <Component {...pageProps} />
      </div>
    </>
  );
}
