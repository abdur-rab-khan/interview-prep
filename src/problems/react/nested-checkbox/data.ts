export interface CheckboxesType {
  id: number;
  name: string;
  children?: CheckboxesType[];
}

const checkboxData: CheckboxesType[] = [
  {
    id: 1001,
    name: "Fruits",
    children: [
      {
        id: 1002,
        name: "Apples",
        children: [
          {
            id: 1003,
            name: "Green Apple",
            children: [
              {
                id: 1004,
                name: "Granny Smith",
              },
              {
                id: 1005,
                name: "Golden Delicious",
              },
            ],
          },
          {
            id: 1006,
            name: "Red Apple",
          },
        ],
      },
      {
        id: 1007,
        name: "Oranges",
        children: [
          {
            id: 1008,
            name: "Sweet Orange",
          },
          {
            id: 1009,
            name: "Blood Orange",
          },
        ],
      },
      {
        id: 1010,
        name: "Bananas",
      },
    ],
  },
];

export default checkboxData;
