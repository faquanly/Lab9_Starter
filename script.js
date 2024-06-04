
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
    console.warn("Console Wanrn")
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
    var people = [
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
    console.table(people);
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

  /**Step 3: Try/Catch */
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
      // error handling
      TrackJS.track('Testing TrackJS!');
      console.error("Bad data, This causes a global error")
    }
    finally {
      console.log("Inside Finally")
    }
  }

  // function errorFunction() {
  //   try {
  //     console.log("Inside try");
  //     throw new Error("Return error");
  //     return 10;
  //   }
  //   catch(err) {
  //     console.log("Inside catch");
  //     return 20;
  //   }
  //   finally {
  //     console.log("Inside finally");
  //     return 30;
  //   }

  // }

  /**Step 4 */ 
  class ValidationError extends Error {
    constructor(message) {
      super(message);
      this.name = "This is a Validation Error"; 
    }
  }


                        