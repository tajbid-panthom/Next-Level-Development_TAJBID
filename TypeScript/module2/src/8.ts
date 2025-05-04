{
  //asyncronus ts
  type ToDo = {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
  };
  const toDo = async (): Promise<ToDo> => {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/todos/1"
    );
    const data = await response.json();
    return data;
  };

  toDo()
    .then((data: ToDo) => console.log(data))
    .catch((err) => {
      console.log(err);
    });
  const createPromise = (): Promise<{ name: string }> => {
    return new Promise<{ name: string }>((resolve, reject) => {
      const data: { name: string } = { name: "Tajbid" };
      if (data) {
        resolve(data);
      } else {
        reject("failed to resolve data");
      }
    });
  };

  // calling create promise function

  const showData = async (): Promise<{ name: string }> => {
    const data: { name: string } = await createPromise();
    return data;
  };
  showData()
    .then((data: { name: string }) => {
      console.log(data);
    })
    .catch((err) => {
      console.log(err);
    });
}
