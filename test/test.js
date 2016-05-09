// Import Chai
import chai from 'chai';

// Import Any Files to Test
import { Rick } from '../src/js/classes/rick';
import { Morty } from '../src/js/classes/morty';
import { Arguement } from '../src/js/classes/argue';

// Set Chai Constants
const expect = chai.expect;
const should = chai.should();
const assert = chai.assert;

describe('Something We Want To Test', function () {

  it('should exist after we create it', function () {
    let x = new Arguement;
    expect(x).to.be.an.instanceof(Arguement);
  });

  it('should exist after we create it', function () {
    let y = new Rick;
    expect(y).to.be.an.instanceof(Rick);
  });

  it('should exist after we create it', function () {
    let z = new Morty;
    expect(z).to.be.an.instanceof(Morty);
  });

});
