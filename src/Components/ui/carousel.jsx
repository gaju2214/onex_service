import React, { useState, useEffect } from 'react'

export function Carousel({ children, opts }) {
    const [currentIndex, setCurrentIndex] = useState(0)
    const carouselContent = React.Children.toArray(children).find(child => child.type === CarouselContent)
    const items = carouselContent ? React.Children.toArray(carouselContent.props.children) : []

    const nextSlide = () => setCurrentIndex((prev) => (prev + 1) % items.length)
    const prevSlide = () => setCurrentIndex((prev) => (prev - 1 + items.length) % items.length)

    useEffect(() => {
        if (opts?.align === 'start') {
            // Simple auto-advance every 5 seconds
            const interval = setInterval(nextSlide, 5000)
            return () => clearInterval(interval)
        }
    }, [opts, items.length])

    return (
        <div className="relative">
            <div className="overflow-hidden pl-8 pr-8">
                <div
                    className="flex gap-4 transition-transform duration-300 ease-in-out"
                    style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                >
                    {items.map((item, index) => (
                        <div key={index} className="w-full flex-shrink-0">
                            {item}
                        </div>
                    ))}
                </div>
            </div>
            <CarouselPrevious onClick={prevSlide} className="border-border bg-background/70" />
            <CarouselNext onClick={nextSlide} className="border-border bg-background/70" />
        </div>
    )
}

export function CarouselContent({ children }) {
    return <div className="flex">{children}</div>
}

export function CarouselItem({ children, className = '' }) {
    return <div className={`flex-shrink-0 ${className}`}>{children}</div>
}

export function CarouselNext({ onClick, className = '' }) {
    return (
        <button
            className={`absolute right-0 top-1/2 -translate-y-1/2 ${className}`}
            onClick={onClick}
        >
            →
        </button>
    )
}

export function CarouselPrevious({ onClick, className = '' }) {
    return (
        <button
            className={`absolute left-0 top-1/2 -translate-y-1/2 ${className}`}
            onClick={onClick}
        >
            ←
        </button>
    )
}
