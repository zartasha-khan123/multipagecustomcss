
import styles from '@/app/components/services/services.module.css';

const Services = () => {

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>OUR SERVICES</h1>
      <p className={styles.description}>
        At Urban Sole, we are dedicated to providing exceptional services for both footwear and clothing, ensuring you step out in style and comfort.
      </p>
      <div className={styles.services}>
      
        <div className={styles.card}>
          <h2>Custom Shoe Design</h2>
          <p>Get your dream shoes designed to match your style and comfort needs.</p>
        </div>
        <div className={styles.card}>
          <h2>Shoe Repair & Care</h2>
          <p>Professional repair services to extend the life of your favorite footwear.</p>
        </div>
        <div className={styles.card}>
          <h2>Footwear Consultation</h2>
          <p>Personalized guidance to help you choose the perfect footwear for any occasion.</p>
        </div>

        <div className={styles.card}>
          <h2>Custom Clothing Tailoring</h2>
          <p>Tailored outfits designed to fit your body and style perfectly.</p>
        </div>
        <div className={styles.card}>
          <h2>Clothing Alterations</h2>
          <p>Adjust your favorite clothes for a perfect fit and enhanced comfort.</p>
        </div>
        <div className={styles.card}>
          <h2>Wardrobe Consultation</h2>
          <p>Expert advice to help you build a versatile wardrobe for every occasion.</p>
        </div>
      </div>
    </div>
  );
};

export default Services;
