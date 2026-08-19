// Insights/podcast hub content. Structure only for now, per the brief —
// real articles and podcast episodes come later. Each entry can be a
// written article (content: array of paragraphs) or a podcast episode
// (podcastEmbedUrl: an iframe embed src, e.g. Spotify/YouTube/Apple
// Podcasts embed link) or both. Add new entries here — no component
// changes needed for new posts/episodes.

export const insights = [
    {
        slug: "welcome-to-onex-insights",
        type: "article",
        title: "Welcome to Onex Insights",
        excerpt: "This is a placeholder post — real articles and podcast episodes about social media marketing, WhatsApp automation, and growing your business in Jalgaon and Maharashtra will be added here.",
        publishedDate: "2026-07-28",
        seoTitle: "Onex Insights | Onex Service, Jalgaon",
        seoDescription: "Articles and podcast episodes on social media marketing, WhatsApp automation, and business growth in Jalgaon and Maharashtra, from Onex Service.",
        podcastEmbedUrl: null,
        content: [
            "This is a placeholder post to show how the Insights hub is structured. Real articles and podcast episodes will be added here over time — covering social media marketing, WhatsApp Business API automation, web and app development, and practical growth advice for businesses in Jalgaon and Maharashtra.",
            "Each post here can be a written article, an embedded podcast episode, or both. New posts can be added without any code changes — just a new entry in the content data.",
        ],
    },
]
