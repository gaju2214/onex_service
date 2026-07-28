import React, { useState, useEffect, useCallback } from 'react'

export function Carousel({ children, opts }) {
    const [currentIndex, setCurrentIndex] = useState(0)
    const carouselContent = React.Children.toArray(children).find(child => child.type === CarouselContent)
    const items = carouselContent ? React.Children.toArray(carouselContent.props.children) : []

    const nextSlide = useCallback(() => setCurrentIndex((prev) => (prev + 1) % items.length), [items.length])
    const prevSlide = () => setCurrentIndex((prev) => (prev - 1 + items.length) % items.length)

    useEffect(() => {
        if (opts?.autoPlay) {
            // Simple auto-advance every 5 seconds
            const interval = setInterval(nextSlide, 5000)
            return () => clearInterval(interval)
        }
    }, [opts, nextSlide])

    return (
        <div className="relative">
            <div className="overflow-hidden px-8 sm:px-10">
                <div
                    className="flex transition-transform duration-300 ease-in-out"
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
            type="button"
            aria-label="Next slide"
            className={`absolute right-0 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border ${className}`}
            onClick={onClick}
        >
            →
        </button>
    )
}

export function CarouselPrevious({ onClick, className = '' }) {
    return (
        <button
            type="button"
            aria-label="Previous slide"
            className={`absolute left-0 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border ${className}`}
            onClick={onClick}
        >
            ←
        </button>
    )
}
