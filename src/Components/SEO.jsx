import { useEffect } from "react"

function setMetaTag(name, content) {
    let tag = document.querySelector(`meta[name="${name}"]`)
    if (!tag) {
        tag = document.createElement("meta")
        tag.setAttribute("name", name)
        document.head.appendChild(tag)
    }
    tag.setAttribute("content", content)
}

export function SEO({ title, description, keywords }) {
    useEffect(() => {
        if (title) document.title = title
        if (description) setMetaTag("description", description)
        if (keywords) setMetaTag("keywords", keywords)
    }, [title, description, keywords])

    return null
}
