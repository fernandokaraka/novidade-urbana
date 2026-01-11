'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Instagram } from 'lucide-react'
import { cardHover, imageScale } from '@/lib/animations'

interface ArtistCardProps {
  name: string
  slug: string
  bio?: string
  photo?: string
  instagram?: string
  categories?: string[]
}

export function ArtistCard({
  name,
  slug,
  bio,
  photo,
  instagram,
  categories,
}: ArtistCardProps) {
  return (
    <motion.div variants={cardHover} initial="rest" whileHover="hover">
      <Link href={`/artistas/${slug}`} className="block group">
        <div className="relative overflow-hidden rounded-lg bg-black aspect-[3/4]">
          {/* Image */}
          <div className="absolute inset-0">
            {photo ? (
              <motion.img
                src={photo}
                alt={name}
                className="w-full h-full object-cover"
                variants={imageScale}
              />
            ) : (
              <div className="w-full h-full bg-gradient-to-br from-brand-yellow/20 to-brand-orange/20 flex items-center justify-center">
                <span
                  className="text-6xl font-black text-white/10"
                  style={{ fontFamily: 'var(--font-heading)' }}
                >
                  {name.charAt(0)}
                </span>
              </div>
            )}
          </div>

          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

          {/* Content */}
          <div className="absolute inset-0 p-6 flex flex-col justify-end">
            {/* Categories */}
            {categories && categories.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-3">
                {categories.slice(0, 2).map((cat) => (
                  <span
                    key={cat}
                    className="px-2 py-1 bg-brand-yellow text-black text-xs font-bold uppercase rounded"
                    style={{ fontFamily: 'var(--font-heading)' }}
                  >
                    {cat}
                  </span>
                ))}
              </div>
            )}

            {/* Name */}
            <h3
              className="text-2xl lg:text-3xl font-black text-white uppercase mb-2 group-hover:text-brand-yellow transition-colors"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              {name}
            </h3>

            {/* Bio */}
            {bio && (
              <p className="text-sm text-gray-300 line-clamp-2 mb-3">{bio}</p>
            )}

            {/* Social */}
            {instagram && (
              <div className="flex gap-2">
                <a
                  href={instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="w-8 h-8 flex items-center justify-center rounded-full bg-white/10 hover:bg-brand-yellow hover:text-black transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram size={16} />
                </a>
              </div>
            )}
          </div>

          {/* Featured Badge */}
          <div className="absolute top-4 right-4">
            <div className="w-12 h-12 rounded-full bg-brand-yellow flex items-center justify-center">
              <span
                className="text-black text-lg font-black"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                ★
              </span>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  )
}
