import { IQuestionnaireData, ISessionSummaryData } from "@/data/types";

export const formData : IQuestionnaireData = {
  sections: [
    {
      title: 'Section A',
      description: 'This section accesses feelings associated with burnout.',
      questions: [
        { itemId: 1, questionText: 'I feel emotionally drained by my work.' },
        {
          itemId: 2,
          questionText: 'Working with people all day long requires a great deal of effort.',
        },
        { itemId: 3, questionText: 'I feel like my work is breaking me down.' },
        { itemId: 4, questionText: 'I feel frustrated by my work.' },
        { itemId: 5, questionText: 'I feel like I work too hard at my job.' },
        {
          itemId: 6,
          questionText: 'It stresses me too much to work in direct contact with people.',
        },
        { itemId: 7, questionText: 'I feel like I’m at the end of my rope.' },
      ],
    },
    {
      title: 'Section B',
      description: 'This section accesses feelings associated with detachment.',
      questions: [
        {
          itemId: 8,
          questionText: 'I feel I look after tasks impersonally, as if they are objects.',
        },
        {
          itemId: 9,
          questionText: 'I feel tired when I get up in the morning and have to face another day at work.',
        },
        {
          itemId: 10,
          questionText:
            'I have the impression that my teammates/stakeholders make me responsible for some of their problems.',
        },
        {
          itemId: 11,
          questionText: 'I am at the end of my patience at the end of my work day.',
        },
        {
          itemId: 12,
          questionText: 'I really don’t care about what happens to some of my teammates/stakeholders.',
        },
        {
          itemId: 13,
          questionText: 'I have become more insensitive to people since I’ve been working.',
        },
        {
          itemId: 14,
          questionText: 'I am afraid this job is making me uncaring.',
        },
      ],
    },
    {
      title: 'Section C',
      description: 'This section accesses feelings associated personal achievement.',
      questions: [
        {
          itemId: 15,
          questionText: 'I accomplish many worthwhile things in this job.',
        },
        { itemId: 16, questionText: 'I feel full of energy.' },
        {
          itemId: 17,
          questionText: 'I am easily able to understand what my patients/clients feel.',
        },
        {
          itemId: 18,
          questionText: 'I look after my teammates/stakeholder’s problems very effectively.',
        },
        {
          itemId: 19,
          questionText: 'In my work, I handle emotional problems very calmly.',
        },
        {
          itemId: 20,
          questionText: 'Through my work, I feel that I have a positive influence on people.',
        },
        {
          itemId: 21,
          questionText: 'I am easily able to create a relaxed atmosphere with my patients/clients.',
        },
        {
          itemId: 22,
          questionText: 'I feel refreshed when I have been close to my teammates/stakeholders at work.',
        },
      ],
    },
  ]
}

export const sessionSummaryData: ISessionSummaryData[] = [
  {
    id: '1',
    title: 'Sprint 203',
    date: '24/02/2023',
    done: false,
    score: 0,
  },
  {
    id: '2',
    title: 'Sprint 202',
    date: '20/01/2023',
    done: true,
    score: 1,
  },
  {
    id: '3',
    title: 'Sprint 201',
    date: '9/01/2023',
    done: true,
    score: 2,
  },

  {
    id: '4',
    title: 'Sprint 200',
    date: '23/12/2022',
    done: true,
    score: 3,
  },
];