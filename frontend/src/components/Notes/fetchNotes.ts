interface tempData {
  id: number;
  title: string;
  noteText: string;
  created_at: string;
}

function fetchNotes() {
  const temp: tempData[] = [
    {
      id: 1,
      title: "Lorem Ipsum 1",
      noteText:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      created_at: "30-01-2024 12:45",
    },
    {
      id: 2,
      title: "Lorem Ipsum 2",
      noteText:
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      created_at: "29-01-2024 10:30",
    },
    {
      id: 3,
      title: "Lorem Ipsum 3",
      noteText:
        "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      created_at: "28-01-2024 08:20",
    },
    {
      id: 4,
      title: "Lorem Ipsum 4",
      noteText:
        "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      created_at: "27-01-2024 18:10",
    },
    {
      id: 5,
      title: "Lorem Ipsum 5",
      noteText:
        "Curabitur pretium tincidunt lacus. Nulla gravida orci a odio. Nullam varius, turpis et commodo pharetra.",
      created_at: "26-01-2024 09:40",
    },
    {
      id: 6,
      title: "Lorem Ipsum 6",
      noteText:
        "Maecenas accumsan mauris sed lacus tincidunt elementum. Duis cursus, mi quis viverra ornare.",
      created_at: "25-01-2024 16:20",
    },
    {
      id: 7,
      title: "Lorem Ipsum 7",
      noteText:
        "Suspendisse ac convallis urna, vitae pulvinar augue. Pellentesque vehicula efficitur tortor, vel feugiat neque.",
      created_at: "24-01-2024 22:15",
    },
    {
      id: 8,
      title: "Lorem Ipsum 8",
      noteText:
        "Vestibulum vel quam id urna lobortis luctus. Nullam in quam a turpis bibendum aliquet.",
      created_at: "23-01-2024 14:05",
    },
    {
      id: 9,
      title: "Lorem Ipsum 9",
      noteText:
        "Proin sed metus vel velit luctus egestas. Aliquam sagittis justo nec lectus molestie, vitae fringilla erat convallis.",
      created_at: "22-01-2024 11:30",
    },
    {
      id: 10,
      title: "Lorem Ipsum 10",
      noteText:
        "Integer rhoncus mi eu massa tincidunt, sit amet sollicitudin justo dictum. Fusce interdum eget libero id dapibus.",
      created_at: "21-01-2024 07:45",
    },
    {
      id: 11,
      title: "Lorem Ipsum 11",
      noteText:
        "Quisque eu est accumsan, tristique libero ut, cursus nulla. Nunc lacinia augue non dui fringilla, nec viverra ligula semper.",
      created_at: "20-01-2024 15:10",
    },
    {
      id: 12,
      title: "Lorem Ipsum 12",
      noteText:
        "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
      created_at: "19-01-2024 19:25",
    },
    {
      id: 13,
      title: "Lorem Ipsum 13",
      noteText:
        "Nam ultricies velit vel leo faucibus, vel tristique dui auctor. Sed ac risus ut metus volutpat fermentum nec vel justo.",
      created_at: "18-01-2024 12:55",
    },
    {
      id: 14,
      title: "Lorem Ipsum 14",
      noteText:
        "Phasellus vulputate odio eu metus tristique, vel fringilla nunc feugiat. Sed vitae odio et tellus convallis luctus.",
      created_at: "17-01-2024 08:30",
    },
    {
      id: 15,
      title: "Lorem Ipsum 15",
      noteText:
        "Nunc finibus sem in mi sollicitudin, a malesuada neque aliquet. Etiam commodo arcu sit amet efficitur varius.",
      created_at: "16-01-2024 14:15",
    },
    {
      id: 16,
      title: "Lorem Ipsum 16",
      noteText:
        "Donec aliquet metus at justo dictum, eget vulputate eros ullamcorper. Sed nec massa ut nunc venenatis eleifend.",
      created_at: "15-01-2024 21:20",
    },
    {
      id: 17,
      title: "Lorem Ipsum 17",
      noteText:
        "Fusce vitae nisi ac tortor fermentum bibendum nec ac ex. Suspendisse vitae justo vel elit scelerisque volutpat.",
      created_at: "14-01-2024 17:40",
    },
    {
      id: 18,
      title: "Lorem Ipsum 18",
      noteText:
        "Praesent nec elit et nunc consectetur vulputate. Sed eu magna eget justo iaculis tristique a a felis.",
      created_at: "13-01-2024 09:55",
    },
    {
      id: 19,
      title: "Lorem Ipsum 19",
      noteText:
        "Vivamus dapibus lacus id risus consectetur, in bibendum purus gravida. Nam in malesuada elit.",
      created_at: "12-01-2024 14:30",
    },
    {
      id: 20,
      title: "Lorem Ipsum 20",
      noteText:
        "In sed sapien sit amet purus auctor elementum. Sed vel odio at est feugiat bibendum vitae eu ex.",
      created_at: "11-01-2024 19:25",
    },
  ];

  temp.map((data: tempData) => {
    if (data.noteText.length >= 90) {
      data.noteText = data.noteText.substring(0, 80) + "...";
    }
  });

  return temp;
}

export default fetchNotes;
