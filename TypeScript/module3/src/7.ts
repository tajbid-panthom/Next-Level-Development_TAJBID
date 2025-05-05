{
  class Counter {
    static count: number = 0;
    static increment() {
      return ++Counter.count;
    }
    static decrement() {
      return --Counter.count;
    }
  }

  const instance1 = new Counter();
  // console.log(instance1.increment());
  const instance2 = new Counter();
  // console.log(instance2.increment());
  console.log(Counter.increment());
  console.log(Counter.increment());
  console.log(Counter.increment());
  console.log(Counter.increment());
  console.log(Counter.increment());
}
