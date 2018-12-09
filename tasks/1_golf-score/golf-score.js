/* eslint "require-jsdoc": 0 */

export const GOLF_SCORES = {
  HOLE_IN_ONE: 'Hole-in-one!',
  EAGLE: 'Eagle',
  BIRDIE: 'Birdie',
  PAR: 'Par',
  GO_HOME: 'Go Home!',
  BOGEY: 'Bogey',
  DOUBLE_BOGEY: 'Double Bogey',
};
export function golfScore(par, stroke) {
  if (stroke === 1) {
    return 'Hole-in-one!';
  } else if (stroke <= par - 2 && stroke !== 1) {
    return 'Eagle';
  } else if (stroke === par - 1) {
    return 'Birdie';
  } else if (stroke === par) {
    return 'Par';
  } else if (stroke === par + 1) {
    return 'Bogey';
  } else if (stroke === par + 2) {
    return 'Double Bogey';
  } else if (stroke >= par + 3 ) {
    return 'Go Home!';
  }
}
