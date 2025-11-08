import React from "react"

export default function Layout({ children }) {
    return (
        <html lang="en">
            <body className="font-sans">
                {children}
            </body>
        </html>
    )
}
