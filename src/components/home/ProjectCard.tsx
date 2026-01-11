'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Calendar, Tag } from 'lucide-react'
import { cardHover, imageScale } from '@/lib/animations'
import { formatDate } from '@/lib/utils'

interface ProjectCardProps {
  title: string
  slug: string
  excerpt?: string
  featuredImage?: string
  publishedAt?: Date | string
  categories?: string[]
}

export function ProjectCard({
  title,
  slug,
  excerpt,
  featuredImage,
  publishedAt,
  categories,
}: ProjectCardProps) {
  return (
    <motion.div variants={cardHover} initial="rest" whileHover="hover">
      <Link href={`/projetos/${slug}`} className="block group">
        <div className="relative overflow-hidden rounded-lg bg-black">
          {/* Image */}
          <div className="relative aspect-[16/10] overflow-hidden">
            {featuredImage ? (
              <motion.img
                src={featuredImage}
                alt={title}
                className="w-full h-full object-cover"
                variants={imageScale}
              />
            ) : (
              <div className="w-full h-full bg-gradient-to-br from-brand-yellow/20 to-brand-orange/20 flex items-center justify-center">
                <span
                  className="text-6xl font-black text-white/10"
                  style={{ fontFamily: 'var(--font-heading)' }}
                >
                  {title.charAt(0)}
                </span>
              </div>
            )}

            {/* Gradient Overlay on Image */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />

            {/* Categories on Image */}
            {categories && categories.length > 0 && (
              <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                {categories.slice(0, 2).map((cat) => (
                  <span
                    key={cat}
                    className="px-3 py-1 bg-brand-yellow text-black text-xs font-bold uppercase rounded-full"
                    style={{ fontFamily: 'var(--font-heading)' }}
                  >
                    {cat}
                  </span>
                ))}
              </div>
            )}
          </div>

          {/* Content */}
          <div className="p-6">
            {/* Date */}
            {publishedAt && (
              <div className="flex items-center gap-2 text-sm text-gray-400 mb-3">
                <Calendar size={14} />
                <time dateTime={publishedAt.toString()}>
                  {formatDate(publishedAt)}
                </time>
              </div>
            )}

            {/* Title */}
            <h3
              className="text-xl lg:text-2xl font-bold text-white uppercase mb-3 group-hover:text-brand-yellow transition-colors line-clamp-2"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              {title}
            </h3>

            {/* Excerpt */}
            {excerpt && (
              <p className="text-sm text-gray-400 line-clamp-3">{excerpt}</p>
            )}
          </div>
        </div>
      </Link>
    </motion.div>
  )
}
