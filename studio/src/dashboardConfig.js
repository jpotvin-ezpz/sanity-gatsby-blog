export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId:
                    "611161f2044c780f6cff601d",
                  title: "Sanity Studio",
                  name: "sanity-gatsby-blog-studio-8wfg5y7w",
                  apiId: "91984516-ace1-4340-9fba-f1e1b1df5d2c",
                },
                {
                  buildHookId: "611161f221764b10ae4fca63",
                  title: "Blog Website",
                  name: "sanity-gatsby-blog-web-bzvhdx2h",
                  apiId: "ad22f2fe-ce64-4221-93d0-8b130c87ebc8",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/jpotvin-ezpz/sanity-gatsby-blog",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://sanity-gatsby-blog-web-bzvhdx2h.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};
