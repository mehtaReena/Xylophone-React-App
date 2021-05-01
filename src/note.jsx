import c  from './assets/bvng.mp3';
import d  from './assets/crfo.mp3';
import e from './assets/dtse.mp3';
import f  from './assets/edqt.mp3';
import g from './assets/ldcc.mp3';
import a from './assets/peoi.mp3';
import b  from './assets/tena.mp3';
import c1 from './assets/udgb.mp3';


// To play a note, for example, the first one
// new Audio(notes[0].file).play();

const notes = [
  {
    name: 'C',
    file: c1,
    style:' bar bar1'
  },
  {
    name: 'D',
    file: d,
    style:'bar bar2'
  },
  {
    name: 'E',
    file: e,
    style:'bar bar3'
  },
  {
    name: 'F',
    file: f,
    style:'bar bar4'
  },
  {
    name: 'G',
    file: g,
    style:'bar bar5'
  },
  {
    name: 'A',
    file: a,
    style:'bar bar6'
  },
  {
    name: 'B',
    file: b, 
    style:'bar bar7'
  },
  {
    name: 'C',
    file: c,
    style:'bar bar8'
  },
];

export default notes;