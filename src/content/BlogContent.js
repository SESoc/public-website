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
    title: "SXSE S01E03 - How To Make The Most Out Of Your First Co-op!",
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
];

const recentBlogPost = blogPosts.reduce((prev, curr) =>
  Number(prev.date) > Number(curr.age) ? prev : curr);

export {BLOG_TYPES, blogPosts, recentBlogPost};
