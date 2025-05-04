{
  //mapped types

  const arrOfNumbers: number[] = [1, 2, 3, 4, 5];

  const arrOfString: string[] = arrOfNumbers.map((e: number): string =>
    e.toString()
  );
  console.log(arrOfString);

  type AreaNumber = {
    height: number;
    width: number;
  };

  type Height = AreaNumber["height"]; //look up type

  type AreaString<T> = {
    [key in keyof T]: T[key];
  };

  const area1: AreaString<{ height: string; width: number }> = {
    height: "10",
    width: 20,
  };
}
