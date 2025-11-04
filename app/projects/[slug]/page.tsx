'use client'

import Link from 'next/link'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import { projects, getProjectBySlug, getNextProjectSlug } from '@/lib/projects'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel'

type Props = { params: { slug: string } }

export default function ProjectDetailPage({ params }: Props) {
  const { slug } = params
  const project = getProjectBySlug(slug)
  if (!project) return notFound()

  const nextSlug = getNextProjectSlug(slug)

  return (
    <div className="min-h-screen bg-black text-white font-mono">
      <div className="max-w-4xl mx-auto p-4 md:p-8">
        <div className="flex items-center justify-between mb-6">
          <Link href="/projects" className="underline hover:opacity-70 transition-opacity">← Back to Projects</Link>
          <Link href="/" className="underline hover:opacity-70 transition-opacity">Home</Link>
        </div>

        {/* Header */}
        <h1 className="text-2xl md:text-3xl font-bold">{project.name}</h1>
        <p className="mt-2 opacity-85">{project.description}</p>

        {/* Meta */}
        <div className="mt-4 text-sm opacity-85 space-x-4">
          <span>{project.date}</span>
          <span>• {project.type}</span>
          {project.client && <span>• {project.client}</span>}
        </div>

        {/* Tech stack */}
        <div className="mt-4">
          <h2 className="text-lg font-semibold">Tech Stack</h2>
          <div className="mt-2 flex flex-wrap gap-2">
            {project.techStack.map((t) => (
              <span key={t} className="px-2 py-1 border border-white/20 rounded text-xs">
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* Actions */}
        <div className="mt-6 flex items-center gap-4">
          {project.url && (
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:opacity-70 transition-opacity"
            >
              Visit Project →
            </a>
          )}
          {nextSlug && (
            <Link href={`/projects/${nextSlug}`} className="underline hover:opacity-70 transition-opacity">
              Next Project →
            </Link>
          )}
        </div>

        {/* Carousel */}
        <div className="mt-8">
          <Carousel className="w-full">
            <CarouselContent>
              {project.images.map((img, idx) => (
                <CarouselItem key={idx}>
                  <div className="relative aspect-video w-full overflow-hidden rounded-lg border border-white/20">
                    {/* Using next/image for optimization; falls back if image not found */}
                    <Image src={img.src} alt={img.alt} fill className="object-cover" />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="border-white/20" />
            <CarouselNext className="border-white/20" />
          </Carousel>
        </div>
      </div>
    </div>
  )
}