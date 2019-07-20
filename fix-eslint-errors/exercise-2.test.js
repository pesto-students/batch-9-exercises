const noop = () => { };

if (typeof console === 'undefined') {
  this.window.console = {
    warn: noop,
    error: noop,
  };
}

// avoid info messages during test
this.console.info = noop;

let asserted;

function createCompareFn(spy) {
  function containsMsg(arg) {
    return arg.toString().indexOf(this.msg) > -1;
  }
  const hasWarned = () => {
    let warned = false;
    const count = spy.calls.count();
    let args;
    while (count > 0) {
      args = spy.calls.argsFor(count);
      if (args.some(containsMsg)) {
        warned = true;
        return true;
      }
    }
    return warned;
  };

  return {
    compare: (msg) => {
      asserted = asserted.concat(msg);
      const warned = Array.isArray(msg)
        ? msg.some(hasWarned)
        : hasWarned(msg);
      return {
        pass: warned,
        message: warned
          ? `Expected message "${msg}" not to have been warned`
          : `Expected message "${msg}" to have been warned`,
      };
    },
  };
}

// define custom matcher for warnings
beforeEach(() => {
  asserted = [];
  this.spyOn(console, 'warn');
  this.spyOn(console, 'error');
  this.jasmine.addMatchers({
    toHaveBeenWarned: () => createCompareFn(this.console.error),
    toHaveBeenTipped: () => createCompareFn(this.console.warn),
  });
});

afterEach((done) => {
  const warned = msg => asserted.some(assertedMsg => msg.toString().indexOf(assertedMsg) > -1);
  const count = this.console.error.calls.count();
  let args;
  while (count > 0) {
    args = this.console.error.calls.argsFor(count);
    if (!warned(args[0])) {
      done.fail(`Unexpected console.error message: ${args[0]}`);
      return;
    }
  }
  done();
});
