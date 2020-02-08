
const create = () => ({
  getFakeData: async () => fetch(`https://gist.githubusercontent.com/sverraest/7be1341f3a92391edf629c09c8749d15/raw/ee87f5c1722b9b11198a35cba5fd9d068135adf4/gistfile1.txt`).then((response) => response.json()),
});

export default create
