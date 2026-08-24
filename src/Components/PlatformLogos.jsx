// Real, brand-accurate multi-color logos for the platforms we manage —
// generic single-color icon sets (e.g. lucide) can't represent these
// correctly since Instagram/Google/etc. are inherently multi-color marks.

export function InstagramLogo({ className }) {
    return (
        <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
            <defs>
                <linearGradient id="ig-gradient" x1="0%" y1="100%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#FFDC80" />
                    <stop offset="25%" stopColor="#FCAF45" />
                    <stop offset="50%" stopColor="#F77737" />
                    <stop offset="75%" stopColor="#E1306C" />
                    <stop offset="100%" stopColor="#C13584" />
                </linearGradient>
            </defs>
            <rect width="24" height="24" rx="6" fill="url(#ig-gradient)" />
            <rect x="6" y="6" width="12" height="12" rx="4" fill="none" stroke="white" strokeWidth="1.4" />
            <circle cx="12" cy="12" r="3.2" fill="none" stroke="white" strokeWidth="1.4" />
            <circle cx="16" cy="8" r="1" fill="white" />
        </svg>
    )
}

export function FacebookLogo({ className }) {
    return (
        <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
            <circle cx="12" cy="12" r="12" fill="#1877F2" />
            <path
                fill="white"
                d="M15.5 12.5h-2v7h-3v-7h-1.5v-2.5h1.5V8.7c0-1.7 1-2.9 3-2.9h2v2.6h-1.3c-.4 0-.7.2-.7.9v1.2h2l-.3 2.5z"
            />
        </svg>
    )
}

export function YoutubeLogo({ className }) {
    return (
        <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
            <rect x="1" y="4.5" width="22" height="15" rx="5" fill="#FF0000" />
            <path fill="white" d="M10 9l6 3-6 3z" />
        </svg>
    )
}

export function GoogleLogo({ className }) {
    return (
        <svg viewBox="0 0 48 48" className={className} aria-hidden="true">
            <path fill="#FFC107" d="M43.611 20.083H42V20H24v8h11.303c-1.649 4.657-6.08 8-11.303 8-6.627 0-12-5.373-12-12s5.373-12 12-12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4 12.955 4 4 12.955 4 24s8.955 20 20 20 20-8.955 20-20c0-1.341-.138-2.65-.389-3.917z" />
            <path fill="#FF3D00" d="M6.306 14.691l6.571 4.819C14.655 15.108 18.961 12 24 12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4 16.318 4 9.656 8.337 6.306 14.691z" />
            <path fill="#4CAF50" d="M24 44c5.166 0 9.86-1.977 13.409-5.192l-6.19-5.238C29.211 35.091 26.715 36 24 36c-5.202 0-9.619-3.317-11.283-7.946l-6.522 5.025C9.505 39.556 16.227 44 24 44z" />
            <path fill="#1976D2" d="M43.611 20.083H42V20H24v8h11.303c-.792 2.237-2.231 4.166-4.087 5.571l.003-.002 6.19 5.238C36.971 39.205 44 34 44 24c0-1.341-.138-2.65-.389-3.917z" />
        </svg>
    )
}
