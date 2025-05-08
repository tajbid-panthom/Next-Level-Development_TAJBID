function formatString(input: string, toUpper?: boolean): string {
  return toUpper ? input.toUpperCase() : input.toLowerCase();
}

function filterByRating(
  items: { title: string; rating: number }[]
): { title: string; rating: number }[] {
  return items.filter(
    (ele: { title: string; rating: number }) => ele.rating >= 4
  );
}
function concatenateArrays<T>(...arrays: T[][]): T[] {
  let a: T[] = [];
  arrays.forEach((ele) => a.push(...ele));
  return a;
}

class Vehicle {
  private make: string;
  private year: number;
  constructor(make: string, year: number) {
    this.make = make;
    this.year = year;
  }
  getInfo() {
    console.log(`Make: ${this.make}, Year: ${this.year}`);
  }
}

class Car extends Vehicle {
  private model: string;
  constructor(make: string, year: number, model: string) {
    super(make, year);
    this.model = model;
  }
  getModel() {
    console.log(`Model: ${this.model}`);
  }
}

function processValue(value: string | number): number {
  if (typeof value === "string") return value.length;
  else if (typeof value === "number") return value * 2;
  else return 0;
}

interface Product {
  name: string;
  price: number;
}

function getMostExpensiveProduct(products: Product[]) {
  products.sort((a, b) => a.price - b.price);
  return products[products.length - 1];
}

enum Day {
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
  Sunday,
}

function getDayType(day: Day): string {
  if (day === Day.Sunday || day === Day.Saturday) {
    return "Weekend";
  } else {
    return "Weekday";
  }
}

async function squareAsync(n: number): Promise<number> {
  return new Promise<number>((resolve, reject) => {
    if (n > 0) {
      setTimeout(() => {
        resolve(n * n);
      }, 1000);
    } else {
      reject("Error: Negative number not allowed");
    }
  });
}
