/**
 * Bus schedule for the academic term (05/01/2569 to 13/05/2569).
 * All times are represented in HH:mm format.
 */

export type BusSchedule = {
  effectiveDateRange: {
    start: string;
    end: string;
  };
  routes: RouteSchedule[];
};

export type DayType = "Monday-Friday" | "Saturday";

export type DepartureTime = {
  hour: number;
  minutes: number[];
  isLastBus?: boolean;
  notes?: string;
};

export type RouteSchedule = {
  line: string;
  path: string;
  days: DayType;
  schedule: DepartureTime[];
  generalNotes?: string;
};

export const busScheduleData: BusSchedule = {
  effectiveDateRange: {
    start: "05/01/2569",
    end: "13/05/2569",
  },
  routes: [
    // --- LINE 1 (Mon-Fri) ---
    {
      line: "1",
      path: "Sala Phra Kiao - Lido Siam",
      days: "Monday-Friday",
      schedule: [
        { hour: 6, minutes: [30, 36, 42, 48, 54] },
        { hour: 7, minutes: [0, 6, 12, 18, 21, 24, 30, 36, 42, 45, 48, 54] },
        { hour: 8, minutes: [0, 6, 9, 12, 18, 24, 30, 33, 36, 42, 48, 54] },
        { hour: 9, minutes: [0, 9, 18, 27, 36, 45, 54] },
        { hour: 10, minutes: [0, 9, 18, 27, 36, 45, 54] },
        { hour: 11, minutes: [0, 9, 18, 27, 36, 45, 54] },
        { hour: 12, minutes: [0, 6, 12, 18, 24, 30, 36, 42, 48, 54] },
        { hour: 13, minutes: [0, 9, 18, 27, 36, 45, 54] },
        { hour: 14, minutes: [0, 9, 18, 27, 36, 45, 54] },
        {
          hour: 15,
          minutes: [0, 9, 18, 27, 36, 45, 54],
          notes: "Does not pass Siam",
        },
        {
          hour: 16,
          minutes: [0, 6, 12, 18, 24, 30, 36, 42, 48, 54],
          notes: "Does not pass Siam",
        },
        {
          hour: 17,
          minutes: [0, 6, 12, 18, 24, 30, 36, 42, 48, 54],
          notes: "Does not pass Siam",
        },
        { hour: 18, minutes: [0, 6, 12, 18, 24, 30, 36, 42, 48, 54] },
        { hour: 19, minutes: [0, 15, 45] },
        { hour: 20, minutes: [15, 45] },
        { hour: 21, minutes: [15, 45], isLastBus: true },
      ],
    },
    // --- LINE 2 (Mon-Fri) ---
    {
      line: "2",
      path: "Sala Phra Kiao - BTS National Stadium",
      days: "Monday-Friday",
      schedule: [
        { hour: 6, minutes: [30, 37, 45, 52] },
        { hour: 7, minutes: [0, 7, 15, 22, 30, 37, 45, 52] },
        { hour: 8, minutes: [0, 7, 15, 22, 30, 37, 45, 52] },
        { hour: 9, minutes: [0, 12, 24, 36, 48] },
        { hour: 10, minutes: [0, 12, 24, 36, 48] },
        { hour: 11, minutes: [0, 12, 24, 36, 48] },
        { hour: 12, minutes: [0, 7, 15, 22, 30, 37, 45, 52] },
        { hour: 13, minutes: [0, 12, 24, 36, 48] },
        { hour: 14, minutes: [0, 12, 24, 36, 48] },
        { hour: 15, minutes: [0, 12, 24, 36, 48] },
        { hour: 16, minutes: [0, 7, 15, 22, 30, 37, 45, 52] },
        { hour: 17, minutes: [0, 7, 15, 22, 30, 37, 45, 52] },
        { hour: 18, minutes: [0, 7, 15, 22, 30, 37, 45, 52] },
        { hour: 19, minutes: [0, 15, 45] },
        { hour: 20, minutes: [15, 45] },
        { hour: 21, minutes: [15, 45], isLastBus: true },
      ],
    },
    // --- LINE 3 (Mon-Fri) ---
    {
      line: "3",
      path: "Sala Phra Kiao - Faculty of Medicine - MBK",
      days: "Monday-Friday",
      schedule: [
        { hour: 6, minutes: [50] },
        { hour: 7, minutes: [5, 20, 35, 50] },
        { hour: 8, minutes: [5, 20, 35, 50] },
        { hour: 9, minutes: [5, 25, 45] },
        { hour: 10, minutes: [5, 25, 45] },
        { hour: 11, minutes: [5, 25, 45] },
        { hour: 12, minutes: [5, 20, 35, 50] },
        { hour: 13, minutes: [5, 25, 45] },
        { hour: 14, minutes: [5, 25, 45] },
        { hour: 15, minutes: [5, 25, 45] },
        {
          hour: 16,
          minutes: [5, 20, 35, 50],
          notes:
            "Does not pass MBK; turns into Soi Chula 12 to U-Center/Sala Phra Kiao",
        },
        {
          hour: 17,
          minutes: [5, 20, 35, 50],
          notes:
            "Does not pass MBK; turns into Soi Chula 12 to U-Center/Sala Phra Kiao",
        },
        {
          hour: 18,
          minutes: [5, 20, 35, 50],
          notes:
            "Does not pass MBK; turns into Soi Chula 12 to U-Center/Sala Phra Kiao",
          isLastBus: true,
        },
      ],
    },
    // --- LINE 4 (Mon-Fri) ---
    {
      line: "4",
      path: "Sala Phra Kiao - Samyan Mitrtown",
      days: "Monday-Friday",
      schedule: [
        { hour: 6, minutes: [30, 37, 45, 52] },
        { hour: 7, minutes: [3, 10, 18, 25, 33, 40, 48, 55] },
        { hour: 8, minutes: [3, 10, 18, 25, 33, 40, 48, 55] },
        { hour: 9, minutes: [3, 15, 27, 39, 51] },
        { hour: 10, minutes: [3, 15, 27, 39, 51] },
        { hour: 11, minutes: [3, 15, 27, 39, 51] },
        { hour: 12, minutes: [3, 10, 18, 25, 33, 40, 48, 55] },
        { hour: 13, minutes: [3, 15, 27, 39, 51] },
        { hour: 14, minutes: [3, 15, 27, 39, 51] },
        { hour: 15, minutes: [3, 15, 27, 39, 51], notes: "Does not pass Siam" },
        {
          hour: 16,
          minutes: [3, 10, 18, 25, 33, 40, 48, 55],
          notes: "Does not pass Siam",
        },
        {
          hour: 17,
          minutes: [3, 10, 18, 25, 33, 40, 48, 55],
          notes: "Does not pass Siam",
        },
        { hour: 18, minutes: [3, 10, 18, 25, 33, 40, 48, 55] },
        { hour: 19, minutes: [10, 40] },
        { hour: 20, minutes: [10, 40] },
        { hour: 21, minutes: [10, 40], isLastBus: true },
      ],
    },
    // --- LINE 5 From CU Terrace (Mon-Fri) ---
    {
      line: "5",
      path: "CU Terrace - Sala Phra Kiao",
      days: "Monday-Friday",
      schedule: [
        { hour: 6, minutes: [45], notes: "Does not pass Banthat Thong" },
        {
          hour: 7,
          minutes: [0, 15, 30, 45],
          notes: "Does not pass Banthat Thong",
        },
        {
          hour: 8,
          minutes: [0, 15, 30, 45],
          notes: "Does not pass Banthat Thong",
        },
        { hour: 9, minutes: [0, 30], notes: "Does not pass Banthat Thong" },
        { hour: 10, minutes: [0, 30], notes: "Does not pass Banthat Thong" },
        { hour: 11, minutes: [0], notes: "Does not pass Banthat Thong" },
        { hour: 11, minutes: [30], notes: "Passes Banthat Thong" },
        { hour: 12, minutes: [0, 30], notes: "Passes Banthat Thong" },
        { hour: 13, minutes: [0, 30], notes: "Passes Banthat Thong" },
        { hour: 14, minutes: [0, 30], notes: "Passes Banthat Thong" },
        { hour: 15, minutes: [0, 30], notes: "Passes Banthat Thong" },
        { hour: 16, minutes: [0, 15, 30, 45], notes: "Passes Banthat Thong" },
        { hour: 17, minutes: [0, 15, 30, 45], notes: "Passes Banthat Thong" },
        { hour: 18, minutes: [0, 15, 30, 45], notes: "Passes Banthat Thong" },
        { hour: 19, minutes: [0, 30], notes: "Passes Banthat Thong" },
        { hour: 20, minutes: [0, 30], notes: "Passes Banthat Thong" },
        {
          hour: 21,
          minutes: [0, 30],
          notes: "Passes Banthat Thong",
          isLastBus: true,
        },
      ],
    },
    // --- LINE 5 From Sala Phra Kiao (Mon-Fri) ---
    {
      line: "5",
      path: "Sala Phra Kiao - CU Terrace",
      days: "Monday-Friday",
      schedule: [
        { hour: 7, minutes: [0, 15, 30, 45] },
        { hour: 8, minutes: [0, 15, 30, 45] },
        { hour: 9, minutes: [0, 30] },
        { hour: 10, minutes: [0, 30] },
        { hour: 11, minutes: [0, 30, 45] },
        { hour: 12, minutes: [15, 45] },
        { hour: 13, minutes: [15, 45] },
        { hour: 14, minutes: [0, 30] },
        { hour: 15, minutes: [0, 30] },
        {
          hour: 16,
          minutes: [0, 15, 30, 45],
          notes: "Delay Expected due to traffic",
        },
        {
          hour: 17,
          minutes: [0, 15, 30, 45],
          notes: "Delay Expected due to traffic",
        },
        {
          hour: 18,
          minutes: [0, 15, 30, 45],
          notes: "Delay Expected due to traffic",
        },
        { hour: 19, minutes: [10, 45] },
        { hour: 20, minutes: [15, 45] },
        { hour: 21, minutes: [15, 45], isLastBus: true },
      ],
    },
    // --- SATURDAY ROUTES ---
    {
      line: "1",
      path: "Sala Phra Kiao - Lido Siam",
      days: "Saturday",
      schedule: [
        { hour: 6, minutes: [30, 45] },
        { hour: 7, minutes: [0, 12, 24, 36, 48] },
        { hour: 8, minutes: [0, 12, 24, 36, 48] },
        { hour: 9, minutes: [0, 12, 24, 36, 48] },
        { hour: 10, minutes: [0, 12, 24, 36, 48] },
        { hour: 11, minutes: [0, 12, 24, 36, 48] },
        { hour: 12, minutes: [0, 12, 24, 36, 48] },
        { hour: 13, minutes: [0, 12, 24, 36, 48] },
        { hour: 14, minutes: [0, 12, 24, 36, 48] },
        { hour: 15, minutes: [0, 12, 24, 36, 48] },
        { hour: 16, minutes: [0, 12, 24, 36, 48] },
        { hour: 17, minutes: [0, 12, 24, 36, 48] },
        { hour: 18, minutes: [0, 12, 24, 36, 48], isLastBus: true },
      ],
    },
    {
      line: "2",
      path: "Sala Phra Kiao - BTS National Stadium",
      days: "Saturday",
      schedule: [
        { hour: 6, minutes: [30, 45] },
        { hour: 7, minutes: [5, 20, 35, 50] },
        { hour: 8, minutes: [5, 20, 35, 50] },
        { hour: 9, minutes: [5, 20, 35, 50] },
        { hour: 10, minutes: [5, 20, 35, 50] },
        { hour: 11, minutes: [5, 20, 35, 50] },
        { hour: 12, minutes: [5, 20, 35, 50] },
        { hour: 13, minutes: [5, 20, 35, 50] },
        { hour: 14, minutes: [5, 20, 35, 50] },
        { hour: 15, minutes: [5, 20, 35, 50] },
        { hour: 16, minutes: [5, 20, 35, 50] },
        { hour: 17, minutes: [5, 20, 35, 50] },
        { hour: 18, minutes: [5, 20, 35, 50], isLastBus: true },
      ],
    },
    {
      line: "4",
      path: "Sala Phra Kiao - Samyan Mitrtown",
      days: "Saturday",
      schedule: [
        { hour: 6, minutes: [30, 45] },
        { hour: 7, minutes: [10, 25, 40, 55] },
        { hour: 8, minutes: [10, 25, 40, 55] },
        { hour: 9, minutes: [10, 25, 40, 55] },
        { hour: 10, minutes: [10, 25, 40, 55] },
        { hour: 11, minutes: [10, 25, 40, 55] },
        { hour: 12, minutes: [10, 25, 40, 55] },
        { hour: 13, minutes: [10, 25, 40, 55] },
        { hour: 14, minutes: [10, 25, 40, 55] },
        { hour: 15, minutes: [10, 25, 40, 55] },
        { hour: 16, minutes: [10, 25, 40, 55] },
        { hour: 17, minutes: [10, 25, 40, 55] },
        { hour: 18, minutes: [10, 25, 40, 55], isLastBus: true },
      ],
    },
  ],
};
