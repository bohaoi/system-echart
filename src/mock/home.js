import Mock from "mockjs";

export default {
  getHomeData: () => {
    return {
      code: 20000,
      data: {
        videoData: [
          {
            name: "springboot",
            value: Mock.Random.float(1000, 10000, 0, 2),
          },
          {
            name: "vue",
            value: Mock.Random.float(1000, 10000, 0, 2),
          },
          {
            name: "java",
            value: Mock.Random.float(1000, 10000, 0, 2),
          },
          {
            name: "小程序",
            value: Mock.Random.float(1000, 10000, 0, 2),
          },
          {
            name: "ES6",
            value: Mock.Random.float(1000, 10000, 0, 2),
          },
          {
            name: "Redis",
            value: Mock.Random.float(1000, 10000, 0, 2),
          },
          {
            name: "React",
            value: Mock.Random.float(1000, 10000, 0, 2),
          },
        ],
      },
    };
  },
};
