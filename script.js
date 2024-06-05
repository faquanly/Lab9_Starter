
  let form = document.querySelector('form');
  form.addEventListener('submit', e => {
    e.preventDefault();
    let output = document.querySelector('output');
    let firstNum = document.querySelector('#first-num').value;
    let secondNum = document.querySelector('#second-num').value;
    let operator = document.querySelector('#operator').value;
    output.innerHTML = eval(`${firstNum} ${operator} ${secondNum}`);
  });

  let errorBtns = Array.from(document.querySelectorAll('#error-btns > button'));

  // Start your code here
  // You may move this JS to another file if you wish
  /** Step 2*/ 
  function consoleLog() {
    console.log("Console Log Demo");
  }

  function consoleError() {
    console.error("Console Error Demo");
  }

  function consoleCount() {
    console.count();
  }

  function consoleWarn() {
    console.warn("Console Warning")
  }

  function consoleAssert() {
    const x = 4;
    const y = 1;
    const reason = "Assert Demo";
    console.assert(x < y, { x, y, reason });
  }

  function consoleClear() {
    console.clear();
  }

  function consoleDir() {
    console.dir(document.head);
  }

  function consoleDirxml() {
    console.dirxml(document);
  }

  function consoleGroupStart() {
    console.group("Console Group Start");
  }

  function consoleGroupEnd() {
    console.groupEnd("Console Group Start");
  }

  function consoleTable() {
    let student = [
      {
        first: 'Joe',
        last: 'Smith',
        GPA: 4.0
      },
      {
        first: 'Brenda',
        last: 'Swift',
        GPA: 3.5
      },
      {
        first: 'Poppy',
        last: 'Link',
        GPA: 3.9
      }
    ];
    console.table(student);
  }

  function consoleTime() {
    console.time();
  }

  function consoleTimeEnd() {
    for (var i = 0; i < 100000; i++) {
      let square = i ** 2;
    }
    console.timeEnd();
  }

  function consoleTrace() {
    const theFirst = () => { theSecond(); };
    const theSecond = () => { theThird(); };
    const theThird = () => { theFourth(); };
    const theFourth = () => { console.trace(); };
    theFirst();
  }

  /**Step 3: Try/Catch  
   ** Step 4 Throw and Custom Errors*/
  function getData(data) {
    if (!data) {
      throw new ValidationError("Invalid data");
    }
    const inputData = data.toUpperCase();
    return inputData;
  }
  function errorFunction() {
    try {
      getData(null)
    } catch (err) {
      TrackJS.track('Testing TrackJS!');
      console.error("Bad input, This causes a global error")
    }
    finally {
      console.log("Inside Finally")
    }
  }

  class ValidationError extends Error {
    constructor(message) {
      super(message);
      this.name = "This is a Validation Error"; 
    }
  }


                        