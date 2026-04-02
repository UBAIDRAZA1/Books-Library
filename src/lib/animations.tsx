'use client';

import { useEffect, useRef, useState } from 'react';

interface UseIntersectionObserverProps {
  threshold?: number;
  rootMargin?: string;
  triggerOnce?: boolean;
}

export function useIntersectionObserver({
  threshold = 0.1,
  rootMargin = '0px',
  triggerOnce = true,
}: UseIntersectionObserverProps = {}) {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsIntersecting(true);
          if (triggerOnce) {
            observer.unobserve(element);
          }
        } else if (!triggerOnce) {
          setIsIntersecting(false);
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(element);

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [threshold, rootMargin, triggerOnce]);

  return { ref, isIntersecting };
}

// Reveal Animation Component
export function Reveal({
  children,
  className = '',
  delay = 0,
  direction = 'up',
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
}) {
  const { ref, isIntersecting } = useIntersectionObserver({ threshold: 0.1 });

  const getDirectionClass = () => {
    switch (direction) {
      case 'up':
        return isIntersecting ? 'animate-fade-in-up' : 'opacity-0 translate-y-10';
      case 'down':
        return isIntersecting ? 'animate-fade-in-down' : 'opacity-0 -translate-y-10';
      case 'left':
        return isIntersecting ? 'animate-fade-in-left' : 'opacity-0 -translate-x-10';
      case 'right':
        return isIntersecting ? 'animate-fade-in-right' : 'opacity-0 translate-x-10';
      case 'none':
        return isIntersecting ? 'animate-fade-in' : 'opacity-0';
      default:
        return isIntersecting ? 'animate-fade-in-up' : 'opacity-0 translate-y-10';
    }
  };

  return (
    <div
      ref={ref}
      className={`${getDirectionClass()} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

// Stagger Children Animation Component
export function Stagger({
  children,
  className = '',
  staggerDelay = 100,
}: {
  children: React.ReactNode;
  className?: string;
  staggerDelay?: number;
}) {
  const { ref, isIntersecting } = useIntersectionObserver({ threshold: 0.05 });

  return (
    <div ref={ref} className={className}>
      {React.Children.map(children, (child, index) => (
        <div
          className={`transition-all duration-700 ${
            isIntersecting
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-10'
          }`}
          style={{ transitionDelay: `${index * staggerDelay}ms` }}
        >
          {child}
        </div>
      ))}
    </div>
  );
}

// Counter Animation Component
export function Counter({
  end,
  duration = 2000,
  suffix = '',
  prefix = '',
  decimals = 0,
}: {
  end: number;
  duration?: number;
  suffix?: string;
  prefix?: string;
  decimals?: number;
}) {
  const [count, setCount] = useState(0);
  const { ref, isIntersecting } = useIntersectionObserver({ threshold: 0.5 });

  useEffect(() => {
    if (!isIntersecting) return;

    let startTime: number;
    let animationFrame: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);

      // Easing function (ease-out)
      const easeOut = 1 - Math.pow(1 - progress, 3);

      setCount(Math.floor(easeOut * end));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, [isIntersecting, end, duration]);

  return (
    <span ref={ref}>
      {prefix}{count.toLocaleString()}{suffix}
    </span>
  );
}

// Typewriter Effect Component
export function Typewriter({
  text,
  speed = 50,
  delay = 0,
  className = '',
}: {
  text: string;
  speed?: number;
  delay?: number;
  className?: string;
}) {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const startTimeout = setTimeout(() => {
      setStarted(true);
    }, delay);

    return () => clearTimeout(startTimeout);
  }, [delay]);

  useEffect(() => {
    if (!started || currentIndex >= text.length) return;

    const timeout = setTimeout(() => {
      setDisplayText(prev => prev + text[currentIndex]);
      setCurrentIndex(prev => prev + 1);
    }, speed);

    return () => clearTimeout(timeout);
  }, [currentIndex, text, speed, started]);

  return (
    <span className={className}>
      {displayText}
      <span className="animate-cursor border-r-2 border-current h-6 inline-block ml-0.5" />
    </span>
  );
}
