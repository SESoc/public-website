const BLOG_TYPES = {
  PODCAST: "Podcast",
  BLOG: "Blog",
  NEWS: "News",
};

const podcastRSSLink = {
  type: "rss",
  link: "https://anchor.fm/s/1ca1c6a8/podcast/rss",
};

const blogPosts = [
  {
    type: BLOG_TYPES.PODCAST,
    title: "SXSE S01E01 - Running a Startup as an SE Student",
    date: "1586908800",
    links: [
      {
        type: "spotify",
        link:
          "https://open.spotify.com/episode/2AW4wE0Oygu4kWUYHIw0jO?si=KGnGYGoYS6CYXXYAMUJrfA",
      },
      {
        type: "anchor",
        link:
          "https://anchor.fm/sesoc/episodes/Running-a-Startup-as-an-SE-Student-ecr190/a-a1uoim4",
      },
      {
        type: "apple",
        link:
          "https://podcasts.apple.com/us/podcast/running-a-startup-as-an-se-student/id1508757308?i=1000471887899",
      },
      podcastRSSLink,
    ],
  },
  {
    type: BLOG_TYPES.PODCAST,
    title: "SXSE S01E02 - SE FYDP: Team Mask",
    date: "1587945600",
    links: [
      {
        type: "spotify",
        link:
          "https://open.spotify.com/episode/24aGh1lNgFf8UPzdGGse5h?si=xi9XMkbPSmOt9rIUi-J5Ng",
      },
      {
        type: "anchor",
        link:
          "https://anchor.fm/sesoc/episodes/SE-FYDP-Team-Mask-edaguu/a-a21rlp2",
      },
      {
        type: "apple",
        link:
          "https://podcasts.apple.com/us/podcast/se-fydp-team-mask/id1508757308?i=1000472800670",
      },
      podcastRSSLink,
    ],
  },
  {
    type: BLOG_TYPES.PODCAST,
    title: "SXSE S01E03 - How To Make The Most Out Of Your First Co-op",
    date: "1593561600",
    links: [
      {
        type: "spotify",
        link:
          "https://open.spotify.com/episode/6dSt5jaAgEtxvUew7YXz48?si=uArETrrJSlW1J5YjynUu7Q",
      },
      {
        type: "anchor",
        link:
          "https://anchor.fm/sesoc/episodes/How-to-Make-the-Most-out-of-Your-First-Co-op-eg5hd4/a-a2jl1iq",
      },
      {
        type: "apple",
        link:
          "https://podcasts.apple.com/us/podcast/how-to-make-the-most-out-of-your-first-co-op/id1508757308?i=1000480893251",
      },
      podcastRSSLink,
    ],
  },
  {
    type: BLOG_TYPES.PODCAST,
    title: "SXSE S01E04 - An SE Student's Guide to Extracurriculars",
    date: "1596931200",
    links: [
      {
        type: "spotify",
        link: "https://open.spotify.com/episode/4gHp1pky25xFfYdl7SlnTV",
      },
      {
        type: "anchor",
        link:
          "https://anchor.fm/sesoc/episodes/An-SE-Students-Guide-to-Extracurriculars-ehtc1v",
      },
      {
        type: "apple",
        link:
          "https://podcasts.apple.com/us/podcast/an-se-students-guide-to-extracurriculars/id1508757308?i=1000487614833",
      },
      podcastRSSLink,
    ],
  },
  {
    type: BLOG_TYPES.PODCAST,
    title:
      "SXSE S01E05 - The Wild Adventure of First-Year Software Engineering",
    date: "1598659200",
    links: [
      {
        type: "spotify",
        link: "https://open.spotify.com/episode/0uB0ULL9OC5mFSsy7oOGh5",
      },
      {
        type: "anchor",
        link:
          "https://anchor.fm/sesoc/episodes/The-Wild-Adventure-of-First-Year-Software-Engineering-eir3ar",
      },
      {
        type: "apple",
        link:
          "https://podcasts.apple.com/us/podcast/the-wild-adventure-of-first-year-software-engineering/id1508757308?i=1000489507047",
      },
      podcastRSSLink,
    ],
  },
  {
    type: BLOG_TYPES.BLOG,
    title: "Useful links for Waterloo Software Engineering students",
    date: "1600574400",
    links: [
      {
        type: "default",
        link: "https://github.com/Dhvani35729/UWaterloo-Links-SE",
      },
    ],
  },
  {
    type: BLOG_TYPES.BLOG,
    title: "Technical Interview Prep Workshop",
    date: "1600747200",
    links: [
      {
        type: "default",
        link: "https://youtu.be/Oyf7P1_7MHM",
      },
    ],
  },
];

const recentBlogPost = blogPosts.reduce((prev, curr) =>
  Number(prev.date) > Number(curr.age) ? prev : curr);

export {BLOG_TYPES, blogPosts, recentBlogPost};
