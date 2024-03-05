export type EmailDataProps = (typeof EMAILS)[0]

export const EMAILS = [
  {
    id: "1",
    name: "Mariana Sabino",
    avatar: "https://mighty.tools/mockmind-api/content/human/44.jpg",
    marker: "important",
    subject: "What is Lorem Ipsum",
    message:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
    star: false,
    date: "03 de mar.",
  },
  {
    id: "2",
    name: "Enzo Henrique",
    avatar: "https://mighty.tools/mockmind-api/content/human/65.jpg",
    subject: "Where does it come from",
    message:
      "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the  source. ",
    star: true,
    date: "01 de mar.",
  },
]