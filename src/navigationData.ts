const data: any = [
  {
    id: 1,
    title: "Home",
    tabs: [
      {
        id: 10,
        title: "Business",
        content: {
          id: 100,
          title: "About business",
          detail: " random string about business",
          child: [
            {
              id: 1111,
              title: " child 1",
              content: "tabs business child 1",
            },
            {
              id: 1112,
              title: " child 2",
              content: "tabs business child 2",
            },
          ],
        },
      },
      {
        id: 11,
        title: "Statistics",
        content: {
          id: 101,
          title: "Statistics",
          detail: " random string about statistics",
          child: [],
        },
      },
      {
        id: 12,
        title: "Projects",
        content: {
          id: 102,
          title: "Projects",
          detail: " random string about projects",
          child: [],
        },
      },
    ],
  },
  {
    id: 2,
    title: "About",
    tabs: [
      {
        id: 21,
        title: "Idea",
        content: {
          id: 102,
          title: "Idea",
          detail: " random string about the idea",
          child: [],
        },
      },
      {
        id: 22,
        title: "Partners",
        content: {
          id: 202,
          title: "Partners",
          detail: " random string about the partners",
          child: [],
        },
      },
    ],
  },
  { id: 3, title: "Posts", tabs: [] },
];

export default data;
