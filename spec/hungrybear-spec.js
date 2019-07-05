// test suite for coolDate

// Date(year month day)
// import { CoolDate } from './../src/coolDate.js';
//
// describe('CoolDate', function() {
//
//   it('should test whether constructor works', function() {
//     let mydate = new CoolDate(2016, 5, 24);
//     expect(mydate.getFullYear()).toEqual(2016);
//     expect(mydate.getMonth()).toEqual(5);
//     expect(mydate.getDate()).toEqual(24);
//   });
//
//
//
// });



  import { bear } from './../src/hungrybear.js';

  describe('HungryBear', function() {
    let fuzzy = bear;

    beforeEach(function() {
      jasmine.clock().install();
      fuzzy.foodLevel = 10;
      fuzzy.name = "Grylls";
      fuzzy.setHunger();
    });

    afterEach(function() {
      jasmine.clock().uninstall();
    });

    it('should have a name and a food level of 10 when it is created', function() {
      expect(fuzzy.name).toEqual("Grylls");
      expect(fuzzy.foodLevel).toEqual(10);
    });


    it('should have a food level of 7 after 3001 milliseconds', function() {
      jasmine.clock().tick(3001);
      expect(fuzzy.foodLevel).toEqual(7);
    });

    it('should get very hungry if the food level drops below zero', function() {
    fuzzy.foodLevel = 0;
    expect(fuzzy.didYouGetEaten()).toEqual(true);
  });

  it('should get very hungry if 10 seconds pass without feeding', function() {
    jasmine.clock().tick(10001);
    expect(fuzzy.didYouGetEaten()).toEqual(true);
  });

  it('should have a food level of ten if it is fed', function() {
    jasmine.clock().tick(9001);
    fuzzy.eatMedium();
    expect(fuzzy.foodLevel).toEqual(11);
  });
  it('should return that the bear ate blueberries and the food level should go up 5', function() {
  expect(fuzzy.eatSmall("blueberries")).toEqual("The bear ate the blueberries! Food level goes up 5!");
  expect(fuzzy.foodLevel).toEqual(15);
});
  });
