import { useEffect } from "react"

const SITE_URL = "https://onexservice.in"
const JSON_LD_ID = "seo-json-ld"

function setMetaTag(name, content) {
    let tag = document.querySelector(`meta[name="${name}"]`)
    if (!tag) {
        tag = document.createElement("meta")
        tag.setAttribute("name", name)
        document.head.appendChild(tag)
    }
    tag.setAttribute("content", content)
}

function setPropertyTag(property, content) {
    let tag = document.querySelector(`meta[property="${property}"]`)
    if (!tag) {
        tag = document.createElement("meta")
        tag.setAttribute("property", property)
        document.head.appendChild(tag)
    }
    tag.setAttribute("content", content)
}

function setCanonical(path) {
    let link = document.querySelector('link[rel="canonical"]')
    if (!link) {
        link = document.createElement("link")
        link.setAttribute("rel", "canonical")
        document.head.appendChild(link)
    }
    link.setAttribute("href", `${SITE_URL}${path}`)
}

function setJsonLd(schema) {
    let script = document.getElementById(JSON_LD_ID)
    if (!schema) {
        if (script) script.remove()
        return
    }
    if (!script) {
        script = document.createElement("script")
        script.id = JSON_LD_ID
        script.type = "application/ld+json"
        document.head.appendChild(script)
    }
    script.textContent = JSON.stringify(schema)
}

export function SEO({ title, description, keywords, schema, image }) {
    useEffect(() => {
        if (title) {
            document.title = title
            setPropertyTag("og:title", title)
            setMetaTag("twitter:title", title)
        }
        if (description) {
            setMetaTag("description", description)
            setPropertyTag("og:description", description)
            setMetaTag("twitter:description", description)
        }
        if (keywords) setMetaTag("keywords", keywords)

        const path = window.location.pathname
        setCanonical(path)
        setPropertyTag("og:url", `${SITE_URL}${path}`)
        setPropertyTag("og:image", image || `${SITE_URL}/logo3.png`)
        setMetaTag("twitter:image", image || `${SITE_URL}/logo3.png`)

        setJsonLd(schema)

        return () => setJsonLd(null)
    }, [title, description, keywords, schema, image])

    return null
}
