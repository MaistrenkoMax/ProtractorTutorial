// spec.js
describe('Protractor Demo App', function() {
    it('should add one and two', function() {
      browser.get('http://juliemr.github.io/protractor-demo/');
      element(by.model('first')).sendKeys(1);
      element(by.model('second')).sendKeys(2);
  
      element(by.id('gobutton')).click();
  
      expect(element(by.binding('latest')).getText()).
          toEqual('5'); // This is wrong!
    });
  });

  //.....

  const param1 = 'Protractor Demo App'
  const param2 = function() {
    it('should add one and two', function() {
      browser.get('http://juliemr.github.io/protractor-demo/');
      element(by.model('first')).sendKeys(1);
      element(by.model('second')).sendKeys(2);
  
      element(by.id('gobutton')).click();
  
      expect(element(by.binding('latest')).getText()).
          toEqual('5'); // This is wrong!
    });
  });


//.........



const param2 = function() { 
    const param3 = 'should add one and two'
    const param4 = function() {
        browser.get('http://juliemr.github.io/protractor-demo/');
        element(by.model('first')).sendKeys(1);
        element(by.model('second')).sendKeys(2);
    
        element(by.id('gobutton')).click();
    
        expect(element(by.binding('latest')).getText()).
            toEqual('5'); // This is wrong!
        }
  
        it(param3, param4);
    }
      ///<<<<<<>>>>>>>>



      const param4 = function () {
          const addr = 'http://juliemr.github.io/protractor-demo/'
          browser.get(addr);
          const element1 = by.model()
          const element2 = 1
element(element1.sendKeys(element2);

const element3 = by.model()
const element4 = 2
element(element3.sendKeys(element4);

const element5 = by.id()
const element6 = ()
element(element5.click(lement6);

const element7 = by.binding ()
const element8 = 5
expect(element(element7).getText()).
            toEqual(element8); // This is wrong!
        
    }


      }


      /////////////////////////////////////////////////////////////////////////////////////////////
      /////SPEC2////////////////////////////////////





      // spec.js
describe('Protractor Demo App', function() {
    var firstNumber = element(by.model('first'));
    var secondNumber = element(by.model('second'));
    var goButton = element(by.id('gobutton'));
    var latestResult = element(by.binding('latest'));
  
    beforeEach(function() {
      browser.get('http://juliemr.github.io/protractor-demo/');
    });
  
    it('should have a title', function() {
      expect(browser.getTitle()).toEqual('Super Calculator');
    });
  
    it('should add one and two', function() {
      firstNumber.sendKeys(1);
      secondNumber.sendKeys(2);
  
      goButton.click();
  
      expect(latestResult.getText()).toEqual('3');
    });
  
    it('should add four and six', function() {
      // Fill this in.
      expect(latestResult.getText()).toEqual('10');
    });
  
    it('should read the value from an input', function() {
      firstNumber.sendKeys(1);
      expect(firstNumber.getAttribute('value')).toEqual('1');
    });
  });
  ///////////......
  const comp1 = 'Protractor Demo App'
  const comp2 = function() {
    var firstNumber = element(by.model('first'));
    var secondNumber = element(by.model('second'));
    var goButton = element(by.id('gobutton'));
    var latestResult = element(by.binding('latest'));
  
  describe(comp1, comp2);

  ///////////////////////

  const comp3 = function()
  const comp4 = 'http://juliemr.github.io/protractor-demo/' ;
  browser.get(comp4);
  it('should have a title', function() {
    expect(browser.getTitle()).toEqual('Super Calculator');
  });

  it('should add one and two', function() {
    firstNumber.sendKeys(1);
    secondNumber.sendKeys(2);

    goButton.click();

    expect(latestResult.getText()).toEqual('3');
  });

  it('should add four and six', function() {
    // Fill this in.
    expect(latestResult.getText()).toEqual('10');
  });

  it('should read the value from an input', function() {
    firstNumber.sendKeys(1);
    expect(firstNumber.getAttribute('value')).toEqual('1');
  });
});

///////////////////////////////


const comp5 = 'should have a title'
const comp6 = function()
const comp7 = ()
const comp8 = 'Super Calculator'
expect(browser.getTitle(comp7)).toEqual(comp8);
 

const comp9 = 'should add one and two'
const comp10 = function()
firstNumber.sendKeys(1);
    secondNumber.sendKeys(2);

    goButton.click();

    expect(latestResult.getText()).toEqual('3');
  })

const comp11 = 'should add four and six'
  const comp12 = function()
  expect(latestResult.getText()).toEqual('10');
});



const comp13 = 'should read the value from an input'
const comp14 = function() {
    const comp15 = 'value'
    const comp16 = '1'
    firstNumber.sendKeys(1);
    expect(firstNumber.getAttribute(comp15)).toEqual(comp16);
  });



//////////////////////////////////////SPEC3////////////////////////
  /////////////////////////////////////////SPEC3////////////////////////////////////////////////////
// spec.js
describe('Protractor Demo App', function() {
    var firstNumber = element(by.model('first'));
    var secondNumber = element(by.model('second'));
    var goButton = element(by.id('gobutton'));
    var latestResult = element(by.binding('latest'));
    var history = element.all(by.repeater('result in memory'));
  
    function add(a, b) {
      firstNumber.sendKeys(a);
      secondNumber.sendKeys(b);
      goButton.click();
    }
  
    beforeEach(function() {
      browser.get('http://juliemr.github.io/protractor-demo/');
    });
  
    it('should have a history', function() {
      add(1, 2);
      add(3, 4);
  
      expect(history.count()).toEqual(2);
  
      add(5, 6);
  
      expect(history.count()).toEqual(0); // This is wrong!
    });
  });

////////////////////////////////////////////////////////////////////////////


const unit1 = 'Protractor Demo App'
const unit2 = function() {
    var firstNumber = element(by.model('first'));
    var secondNumber = element(by.model('second'));
    var goButton = element(by.id('gobutton'));
    var latestResult = element(by.binding('latest'));
    var history = element.all(by.repeater('result in memory'));

    function add(a, b) {
        firstNumber.sendKeys(a);
        secondNumber.sendKeys(b);
        goButton.click();
      }
      describe(unit1, unit2)

      const unit3 = function()
      const uniit4 = 'http://juliemr.github.io/protractor-demo/'

      beforeEach(unit3)
      browser.get(uniit4 );

      const unit5 = 'should have a history'
      const unit6 = function()

      add(1, 2);
      add(3, 4);
  
      expect(history.count()).toEqual(2);
  
      add(5, 6);
  
      expect(history.count()).toEqual(0); // This is wrong!
    });
  });



    
  
///////////////////////////////////////////////////////////////////////////////////










