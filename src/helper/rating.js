import rating3 from '../images/desktop/cards/rating3.svg';
import rating3_5 from '../images/desktop/cards/rating3.5.svg';
import rating4 from '../images/desktop/cards/rating3.5.svg';
import rating4_5 from '../images/desktop/cards/rating4.5.svg';
import rating5 from '../images/desktop/cards/rating5.svg';

const rating = rat => {
    // console.log(typeof rat);
    if (rat > 0 && rat <= 1) {
        // console.log('0');
        return;
    } else if (rat > 1 && rat <= 2) {
        // console.log('1');
        return;
    } else if (rat > 2 && rat <= 3) {
        // console.log('2');
        return;
    } else if (rat > 3 && rat <= 4) {
        // console.log('3');
        return;
    } else if (rat > 4 && rat <= 5) {
        // console.log('4');
        return;
    } else if (rat > 5 && rat <= 6) {
        // console.log('5');
        return;
    } else if (rat > 6 && rat <= 7) {
        // console.log('6');
        return rating3;
    } else if (rat > 7 && rat <= 8) {
        // console.log('7');
        return rating3_5;
    } else if (rat > 8 && rat <= 9) {
        // console.log('8');
        return rating4;
    } else if (rat > 9 && rat <= 10) {
        // console.log('9');
        return rating4_5;
    } else {
        // console.log('else');
        return rating5;
    }
};

export default rating;
