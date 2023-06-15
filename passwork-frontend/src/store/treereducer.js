const initialState = [
    {
    id: 'root',
    name: 'First',
    children: [
      {
        id: '1',
        name: 'Child - 1',
      },
      {
        id: '3',
        name: 'Child - 3',
        children: [
          {
            id: '4',
            name: 'Child - 4',
            children: [
                {
                    id: '5',
                    name: 'Child - 5',
                }
            ]
          },
        ],
      },
    ],
  },
  {
    id: 'root',
    name: 'Second',
    children: [
      {
        id: '1',
        name: 'Child - 1',
      },
      {
        id: '3',
        name: 'Child - 3',
        children: [
          {
            id: '4',
            name: 'Child - 4',
            children: [
                {
                    id: '5',
                    name: 'Child - 5',
                },
            ]
          },
        ],
        
      },
      {
        id: '6',
        name: 'child-6',
      }
    ],
  }
];


export default (state = initialState, {type, payload}) => {
    switch (type) {
        case 'TREE_GET':
            return {...state};

        default:
            return state;
    }
};