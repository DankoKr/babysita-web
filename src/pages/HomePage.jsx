import React from 'react';
import StepBox from '../components/StepBox';
import styles from './HomePage.module.css';
import ImageContainer from '../components/ImageContainer';

const HomePage = () => {
  const steps = [
    { title: "Step One", description: "In order to use the platform you need an account. So go on and create one if you have not already!" },
    { title: "Step Two", description: "Find a parent or a babysitter that are looking for service."},
    { title: "Step Three", description: "Message them that you are interested. And that's it. You are all set!" }
  ];
  
  return (
    <div className={styles.home}>
      <ImageContainer 
        src="https://i.pinimg.com/originals/45/98/d9/4598d92a284816380fd1733d17a6e731.png"  
      />
      <h2>How it works</h2>
      <br/>
      <div className={styles['step-container']}>
        {steps.map((step, index) => (
          <StepBox key={index} {...step} />
        ))}
      </div>
    </div>
  );
}
 
export default HomePage;
