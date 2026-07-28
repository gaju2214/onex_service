export function loadInstagramEmbedScript() {
    if (window.instgrm) {
        window.instgrm.Embeds.process()
        return
    }
    const existing = document.getElementById("instagram-embed-script")
    if (existing) return

    const script = document.createElement("script")
    script.id = "instagram-embed-script"
    script.src = "https://www.instagram.com/embed.js"
    script.async = true
    script.onload = () => window.instgrm && window.instgrm.Embeds.process()
    document.body.appendChild(script)
}

