import { Link, useLocation } from "react-router-dom";
import GlitchSquiggly from 'react-glitch-effect/core/GlitchSquiggly';
import IconBox from './IconBox';
import GlitchClip from 'react-glitch-effect/core/GlitchClip';
import styles from './Nav.module.css';
// icons from Ant Design 

const Nav = (props) => {

  let location = useLocation()
  
  return (
    <div className={styles.Nav}>
      {
        location.pathname !== '/' &&
        <GlitchSquiggly baseFrequency={0.32} scaleNoise={0.8} duration={400} disabled={props.fxDisabled}>
          <GlitchClip className={styles.container} iterationCount="1" duration={9000} disabled={props.fxDisabled}> 
            <Link to={'/'} className={styles.Link}>
                <IconBox title='home' fxDisabled={props.fxDisabled}
                  d={[
                    'M 872,476 H 548 V 144 H 476 V 476 H 152 c -4.4,0 -8,3.6 -8,8 v 56 c 0,4.4 3.6,8 8,8 h 324 v 332 h 72 V 548 h 324 c 4.4,0 8,-3.6 8,-8 v -56 c 0,-4.4 -3.6,-8 -8,-8 z m -6.33908,-269.28964 -44.44051,1.11866 c -4.3986,0.11072 -13.18289,-7.73901 -13.18914,-3.33902 l -0.39443,277.36845 c -0.006,4.39999 9.05282,-0.57121 13.4474,-0.35268 l 41.89998,2.0836 c 4.39456,0.21854 17.03176,9.61692 17.0318,5.21692 l 0.002,-282.58322 c 3.9e-4,-4.40001 -9.95849,0.37657 -14.3571,0.48729 z M 872,808 h -56 c -4.4,0 -8,3.6 -8,8 v 56 c 0,4.4 3.6,8 8,8 h 56 c 4.4,0 8,-3.6 8,-8 v -56 c 0,-4.4 -3.6,-8 -8,-8 z m 0,-664 h -56 c -4.4,0 -8,3.6 -8,8 v 56 c 0,4.4 3.6,8 8,8 h 56 c 4.4,0 8,-3.6 8,-8 v -56 c 0,-4.4 -3.6,-8 -8,-8 z m 0,498 h -56 c -4.4,0 -8,3.6 -8,8 v 56 c 0,4.4 3.6,8 8,8 h 56 c 4.4,0 8,-3.6 8,-8 v -56 c 0,-4.4 -3.6,-8 -8,-8 z M 543.11984,239.24265 812.56968,175.53202 c 4.28193,-1.01245 0.36822,-2.42021 0.27176,-6.81915 l -0.31181,-14.21845 c -0.0965,-4.39894 7.75166,-10.49434 3.35166,-10.49442 l -272.00397,-0.005 c -4.39999,-8e-5 -0.72611,12.61609 -0.69799,17.016 L 543.4797,208 c 0.0281,4.39991 -4.64179,32.2551 -0.35986,31.24265 z M 706,808 h -56 c -4.4,0 -8,3.6 -8,8 v 56 c 0,4.4 3.6,8 8,8 h 56 c 4.4,0 8,-3.6 8,-8 v -56 c 0,-4.4 -3.6,-8 -8,-8 z m -227.93947,-20.67102 -262.97835,61.9599 c -4.28274,1.00905 -0.67762,3.04374 -1.49504,7.36715 l -3.25248,17.20253 c -0.81743,4.3234 -11.36951,6.12737 -6.96951,6.12759 l 273.73253,0.0134 c 4.4,2.2e-4 2.68472,-7.59579 2.61461,-11.99523 l -0.89427,-56.11567 c -0.0701,-4.39944 -0.31768,-20.60327 -0.31768,-16.20327 z M 318,216 h 56 c 4.4,0 8,-3.6 8,-8 v -56 c 0,-4.4 -3.6,-8 -8,-8 h -56 c -4.4,0 -8,3.6 -8,8 v 56 c 0,4.4 3.6,8 8,8 z m -166,0 h 56 c 4.4,0 8,-3.6 8,-8 v -56 c 0,-4.4 -3.6,-8 -8,-8 h -56 c -4.4,0 -8,3.6 -8,8 v 56 c 0,4.4 3.6,8 8,8 z m 56,592 h -56 c -4.4,0 -8,3.6 -8,8 v 56 c 0,4.4 3.6,8 8,8 h 56 c 4.4,0 8,-3.6 8,-8 v -56 c 0,-4.4 -3.6,-8 -8,-8 z M 152,382 h 56 c 4.4,0 8,-3.6 8,-8 v -56 c 0,-4.4 -3.6,-8 -8,-8 h -56 c -4.4,0 -8,3.6 -8,8 v 56 c 0,4.4 3.6,8 8,8 z m 61.71668,134.64153 -42.47316,27.01097 C 167.53073,546.01367 143.99999,535.71862 144,540.11862 l 9.4e-4,276.58549 c 10e-6,4.4 4.47242,3.43677 8.84374,2.9352 l 42.91146,-4.92372 C 200.12746,814.21402 216,816 216,816 V 650 c 0,-4.4 1.42947,-135.71964 -2.28332,-133.35847 z',
                  ]} />       
            </Link>

            <Link to={'/code'} className={styles.Link}>
                <IconBox title='code' fxDisabled={props.fxDisabled}
                  d={[
                    'M516 673c0 4.4 3.4 8 7.5 8h185c4.1 0 7.5-3.6 7.5-8v-48c0-4.4-3.4-8-7.5-8h-185c-4.1 0-7.5 3.6-7.5 8v48zm-194.9 6.1l192-161c3.8-3.2 3.8-9.1 0-12.3l-192-160.9A7.95 7.95 0 0 0 308 351v62.7c0 2.4 1 4.6 2.9 6.1L420.7 512l-109.8 92.2a8.1 8.1 0 0 0-2.9 6.1V673c0 6.8 7.9 10.5 13.1 6.1zM880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zm-40 728H184V184h656v656z',
                  ]} />  
            </Link>
              
            <Link to={'/video'} className={styles.Link}>
                <IconBox title='video' fxDisabled={props.fxDisabled}
                  d={[
                    'M 912 302.3 L 784 376 V 224 c 0 -35.3 -28.7 -64 -64 -64 H 128 c -35.3 0 -64 28.7 -64 64 v 576 c 0 35.3 28.7 64 64 64 h 592 c 35.3 0 64 -28.7 64 -64 V 648 l 128 73.7 c 21.3 12.3 48 -3.1 48 -27.6 V 330 c 0 -24.6 -26.7 -40 -48 -27.7 Z M 712 792 H 136 V 232 h 576 v 560 Z m 176 -167 l -104 -59.8 V 458.9 L 888 399 v 226 Z M 208 360 h 112 c 4.4 0 8 -3.6 8 -8 v -48 c 0 -4.4 -3.6 -8 -8 -8 H 208 c -4.4 0 -8 3.6 -8 8 v 48 c 0 4.4 3.6 8 8 8 Z',
                  ]} />    
            </Link>

            <Link to={'/about'} className={styles.Link}>
                <IconBox title='about' fxDisabled={props.fxDisabled}
                  d={[
                    'M 512 64 C 264.6 64 64 264.6 64 512 s 200.6 448 448 448 s 448 -200.6 448 -448 S 759.4 64 512 64 Z m 0 820 c -205.4 0 -372 -166.6 -372 -372 s 166.6 -372 372 -372 s 372 166.6 372 372 s -166.6 372 -372 372 Z',
                    'M 464 336 a 48 48 0 1 0 96 0 a 48 48 0 1 0 -96 0 Z m 72 112 h -48 c -4.4 0 -8 3.6 -8 8 v 272 c 0 4.4 3.6 8 8 8 h 48 c 4.4 0 8 -3.6 8 -8 V 456 c 0 -4.4 -3.6 -8 -8 -8 Z'
                  ]} />    
            </Link>
          </GlitchClip>
        </GlitchSquiggly>
      }
    </div>
)
          }
export default Nav;
