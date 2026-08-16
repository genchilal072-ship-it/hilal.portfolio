import { useState, useRef, useEffect, useCallback } from 'react'
import anaSayfa from '@/imports/ana_sayfa.png'
import aboutTextImg from '@/imports/about-1.png'
import portraitIllustration from '@/imports/Ads_z_Resim__9_.png'
import workBgImg from '@/imports/workpng.png'
// Presentation long-PNGs
import presentationCampaign from '@/imports/i_ler-05.png'
import presentationInternship from '@/imports/i_ler-04.png'
import presentationPoster from '@/imports/i_ler-03.png'
import presentationPackaging from '@/imports/i_ler-01.png'
import presentationIllustrations from '@/imports/i_ler-02.png'
// Video files
import video1 from '@/imports/hilal-genc_wrapped_1.mp4'
import video2 from '@/imports/hilal-genc_wrapped_2.mp4'
import video3 from '@/imports/hilal-genc_wrapped_3.mp4'
import video4 from '@/imports/yatayvideo..mp4'
import coverCampaign from '@/imports/odev_8-06-1.png'
import coverIllustrations from '@/imports/odev_8-07-1.png'
import coverPoster from '@/imports/odev_8-08-1.png'
import coverPackaging from '@/imports/odev_8-09-1.png'
import coverInternship from '@/imports/odev_8-10-1.png'
import coverVideos from '@/imports/odev_8-11-1.png'

// ─── Color tokens ───────────────────────────────────────────────────────────
const NAV_COLOR = '#6B7AC9'
const ACCENT_RED = '#F0504A'
const ACCENT_BLUE = '#6A91EB'
const ABOUT_BG_COLOR = '#F2C0B3'
const WORK_BG_COLOR = '#C5D3EE'

// ─── Project data ────────────────────────────────────────────────────────────
// Replace `cover` strings with imported image modules and `presentation` with
// imported long-PNG modules once you upload the asset files.
const PROJECTS = [
  {
    id: 'campaign',
    label: 'CAMPAIGN',
    cover: coverCampaign,
    presentation: presentationCampaign,
  },
  {
    id: 'internship',
    label: 'INTERNSHIP',
    cover: coverInternship,
    presentation: presentationInternship,
  },
  {
    id: 'poster',
    label: 'POSTER',
    cover: coverPoster,
    presentation: presentationPoster,
  },
  {
    id: 'packaging',
    label: 'PACKAGING',
    cover: coverPackaging,
    presentation: presentationPackaging,
  },
  {
    id: 'illustrations',
    label: 'ILLUSTRATIONS',
    cover: coverIllustrations,
    presentation: presentationIllustrations,
  },
  {
    id: 'videos',
    label: 'VIDEOS',
    cover: coverVideos,
    type: 'videos',
  },
]

// Video placeholders — replace src strings with actual video URLs or imports
const VIDEO_PLACEHOLDERS = [
  { id: 'v1', src: video1 },
  { id: 'v2', src: video2 },
  { id: 'v3', src: video3 },
  { id: 'v4', src: video4 },
]

// ─── JitterText ──────────────────────────────────────────────────────────────
function JitterText({ text, className }: { text: string; className?: string }) {
  const [active, setActive] = useState(false)
  return (
    <span
      className={`${className ?? ''} ${active ? 'jitter-active' : ''}`}
      style={{ cursor: 'default' }}
      onMouseEnter={() => setActive(true)}
      onMouseLeave={() => setActive(false)}
    >
      {text.split('').map((ch, i) => (
        <span key={i} className="jitter-letter">
          {ch === ' ' ? ' ' : ch}
        </span>
      ))}
    </span>
  )
}

// ─── Nav ─────────────────────────────────────────────────────────────────────
function Nav() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }
  const linkStyle: React.CSSProperties = {
    fontFamily: "'Montserrat', sans-serif",
    fontWeight: 600,
    fontSize: 'clamp(11px, 1.1vw, 14px)',
    letterSpacing: '0.12em',
    color: NAV_COLOR,
    cursor: 'pointer',
    background: 'none',
    border: 'none',
    padding: 0,
  }
  return (
    <nav
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 'clamp(20px, 3vw, 36px) clamp(24px, 5vw, 72px)',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 10,
      }}
    >
      <button style={linkStyle} onClick={() => scrollTo('home')}>HOME</button>
      <div style={{ display: 'flex', gap: 'clamp(24px, 4vw, 60px)' }}>
        <button style={linkStyle} onClick={() => scrollTo('about')}>ABOUT</button>
        <button style={linkStyle} onClick={() => scrollTo('work')}>WORK</button>
        <button style={linkStyle} onClick={() => scrollTo('connect')}>CONNECT</button>
      </div>
    </nav>
  )
}

// ─── HOME section ────────────────────────────────────────────────────────────
function HomeSection() {
  const SIDE_PAD = 'clamp(20px, 5vw, 72px)'

  return (
    <section
      id="home"
      style={{
        position: 'relative',
        width: '100%',
        background: '#fff',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <Nav />

      {/* Image + bottom bar share the same horizontal padding so right edges align */}
      <div
        style={{
          paddingLeft: SIDE_PAD,
          paddingRight: SIDE_PAD,
          paddingTop: 'clamp(60px, 9vw, 110px)',
          paddingBottom: 'clamp(16px, 3vw, 36px)',
          display: 'flex',
          flexDirection: 'column',
          gap: 'clamp(10px, 1.5vw, 20px)',
        }}
      >
        {/* Home image — no overlays, no extra elements, natural aspect ratio */}
        <img
          src={anaSayfa}
          alt="Home — Welcome"
          style={{
            width: '100%',
            height: 'auto',
            display: 'block',
          }}
        />

        {/* Bottom bar — same width as image, so right edge aligns perfectly */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <span
            style={{
              fontFamily: "'Montserrat', sans-serif",
              fontWeight: 600,
              fontSize: 'clamp(11px, 1.1vw, 14px)',
              letterSpacing: '0.1em',
              color: NAV_COLOR,
            }}
          >
            2026
          </span>
          <span
            style={{
              fontFamily: "'Montserrat', sans-serif",
              fontWeight: 600,
              fontSize: 'clamp(11px, 1.1vw, 14px)',
              letterSpacing: '0.1em',
              color: ACCENT_RED,
            }}
          >
            TO MY PORTFOLIO
          </span>
        </div>
      </div>
    </section>
  )
}

// ─── ABOUT section ───────────────────────────────────────────────────────────
function AboutSection() {
  const [jitter, setJitter] = useState(false)
  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

  const textStyle: React.CSSProperties = {
    fontFamily: "'Montserrat', sans-serif",
    fontWeight: 400,
    fontSize: 'clamp(13px, 1.1vw, 16px)',
    lineHeight: 1.75,
    color: '#1a1a1a',
  }

  return (
    <section
      id="about"
      style={{ position: 'relative', width: '100%', background: '#fff' }}
    >
      <div
        style={{
          position: 'relative',
          display: 'flex',
          alignItems: 'center',
          padding: 'clamp(40px, 6vw, 80px) clamp(20px, 5vw, 72px) clamp(60px, 8vw, 100px)',
          gap: 'clamp(24px, 4vw, 60px)',
        }}
      >
        {/* ── Layer 0: ABOUT text image — backmost, full width ── */}
        <img
          src={aboutTextImg}
          alt=""
          aria-hidden="true"
          onMouseEnter={() => setJitter(true)}
          onMouseLeave={() => setJitter(false)}
          style={{
            position: 'absolute',
            top: '50%',
            left: 0,
            width: '100%',
            height: 'auto',
            transform: 'translateY(-50%)',
            zIndex: 0,
            display: 'block',
            animation: jitter ? 'jitter 0.4s ease-in-out infinite' : 'none',
            cursor: 'default',
            pointerEvents: 'auto',
          }}
        />

        {/* ── Layer 1: Portrait illustration — middle ── */}
        <div style={{ flex: '0 0 46%', position: 'relative', zIndex: 1 }}>
          <img
            src={portraitIllustration}
            alt="Portrait illustration"
            style={{ width: '100%', height: 'auto', display: 'block' }}
          />
        </div>

        {/* ── Layer 2: Description text — front, no background ── */}
        <div style={{ flex: 1, position: 'relative', zIndex: 2 }}>
          <p style={{ ...textStyle, marginBottom: '1.4em' }}>
            I&apos;m <strong>Hilal</strong>, a Visual Communication Design student at TOBB
            University of Economics and Technology. I design brands, campaigns, and visual
            identities — work that tells a clear story and leaves a lasting impression.
          </p>
          <p style={{ ...textStyle, marginBottom: '1.4em' }}>
            My experience at <strong>Dantatsu</strong> and <strong>Solarity AI</strong> taught
            me to move between strategy and aesthetics without losing either. I&apos;ve worked
            across print, digital, and motion — always aiming for cohesion.
          </p>
          <p style={{ ...textStyle }}>
            Tools: <strong>Adobe Illustrator</strong>, <strong>Photoshop</strong>,{' '}
            <strong>Premiere Pro</strong>. Currently open to creative opportunities.
          </p>
        </div>
      </div>

      {/* HOME link */}
      <button
        onClick={() => scrollTo('home')}
        style={{
          position: 'absolute',
          bottom: 'clamp(16px, 3vw, 36px)',
          left: 'clamp(24px, 5vw, 72px)',
          fontFamily: "'Montserrat', sans-serif",
          fontWeight: 600,
          fontSize: 'clamp(11px, 1.1vw, 14px)',
          letterSpacing: '0.12em',
          color: NAV_COLOR,
          background: 'none',
          border: 'none',
          cursor: 'pointer',
          zIndex: 7,
        }}
      >
        HOME
      </button>
    </section>
  )
}

// ─── Project Card ─────────────────────────────────────────────────────────────
function ProjectCard({
  project,
  onClick,
}: {
  project: (typeof PROJECTS)[0]
  onClick: () => void
}) {
  return (
    <div
      onClick={onClick}
      style={{
        flex: '0 0 calc(33.333% - 12px)',
        maxWidth: 'calc(33.333% - 12px)',
        aspectRatio: '3/4',
        background: '#111',
        cursor: 'pointer',
        position: 'relative',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'flex-end',
        transition: 'transform 0.2s ease',
      }}
      onMouseEnter={e => ((e.currentTarget as HTMLElement).style.transform = 'scale(1.015)')}
      onMouseLeave={e => ((e.currentTarget as HTMLElement).style.transform = 'scale(1)')}
    >
      {/* Cover image */}
      <img
        src={project.cover}
        alt={project.label}
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          display: 'block',
        }}
      />
    </div>
  )
}

// ─── WORK section ─────────────────────────────────────────────────────────────
function WorkSection({ onOpenProject }: { onOpenProject: (id: string) => void }) {
  const [slide, setSlide] = useState(0) // 0 = first group, 1 = second group
  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

  const groups = [PROJECTS.slice(0, 3), PROJECTS.slice(3, 6)]

  return (
    <section
      id="work"
      style={{
        position: 'relative',
        width: '100%',
        background: '#fff',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        padding: 'clamp(60px, 8vw, 100px) 0 clamp(60px, 8vw, 100px)',
      }}
    >
      {/* WORK background PNG — vertically centred, bleeds beyond visible area */}
      <img
        src={workBgImg}
        alt=""
        aria-hidden="true"
        style={{
          position: 'absolute',
          top: 'clamp(-20px, -2vw, 0px)',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '120%',
          height: 'auto',
          display: 'block',
          zIndex: 0,
          pointerEvents: 'none',
        }}
      />

      {/* Carousel */}
      <div
        style={{
          position: 'relative',
          zIndex: 2,
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          gap: 'clamp(12px, 2vw, 24px)',
          padding: '0 clamp(24px, 5vw, 72px)',
        }}
      >
        {/* Left arrow */}
        <button
          onClick={() => setSlide(0)}
          disabled={slide === 0}
          style={{
            flexShrink: 0,
            width: 'clamp(32px, 3vw, 44px)',
            height: 'clamp(32px, 3vw, 44px)',
            background: 'none',
            border: 'none',
            cursor: slide === 0 ? 'default' : 'pointer',
            opacity: slide === 0 ? 0.25 : 1,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            transition: 'opacity 0.2s',
          }}
          aria-label="Previous"
        >
          <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
            <path d="M17 6L9 14L17 22" stroke="#222" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>

        {/* Cards viewport */}
        <div style={{ flex: 1, overflow: 'hidden' }}>
          <div
            className="carousel-track"
            style={{
              display: 'flex',
              gap: 'clamp(8px, 1.5vw, 18px)',
              transform: `translateX(${slide === 0 ? '0%' : '-50%'})`,
              width: '200%',
            }}
          >
            {/* Group 0 */}
            <div
              style={{
                display: 'flex',
                gap: 'clamp(8px, 1.5vw, 18px)',
                width: '50%',
                flexShrink: 0,
              }}
            >
              {groups[0].map(p => (
                <ProjectCard key={p.id} project={p} onClick={() => onOpenProject(p.id)} />
              ))}
            </div>
            {/* Group 1 */}
            <div
              style={{
                display: 'flex',
                gap: 'clamp(8px, 1.5vw, 18px)',
                width: '50%',
                flexShrink: 0,
              }}
            >
              {groups[1].map(p => (
                <ProjectCard key={p.id} project={p} onClick={() => onOpenProject(p.id)} />
              ))}
            </div>
          </div>
        </div>

        {/* Right arrow */}
        <button
          onClick={() => setSlide(1)}
          disabled={slide === 1}
          style={{
            flexShrink: 0,
            width: 'clamp(32px, 3vw, 44px)',
            height: 'clamp(32px, 3vw, 44px)',
            background: 'none',
            border: 'none',
            cursor: slide === 1 ? 'default' : 'pointer',
            opacity: slide === 1 ? 0.25 : 1,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            transition: 'opacity 0.2s',
          }}
          aria-label="Next"
        >
          <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
            <path d="M11 6L19 14L11 22" stroke="#222" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>

      {/* HOME link bottom-left */}
      <button
        onClick={() => scrollTo('home')}
        style={{
          position: 'absolute',
          bottom: 'clamp(16px, 3vw, 36px)',
          left: 'clamp(24px, 5vw, 72px)',
          fontFamily: "'Montserrat', sans-serif",
          fontWeight: 600,
          fontSize: 'clamp(11px, 1.1vw, 14px)',
          letterSpacing: '0.12em',
          color: NAV_COLOR,
          background: 'none',
          border: 'none',
          cursor: 'pointer',
          zIndex: 3,
        }}
      >
        HOME
      </button>
    </section>
  )
}

// ─── Project Viewer (modal) ────────────────────────────────────────────────────
function ProjectViewer({
  projectId,
  onClose,
}: {
  projectId: string
  onClose: () => void
}) {
  const overlayRef = useRef<HTMLDivElement>(null)
  const [closing, setClosing] = useState(false)

  const project = PROJECTS.find(p => p.id === projectId)!

  const handleClose = useCallback(() => {
    setClosing(true)
    setTimeout(onClose, 300)
  }, [onClose])

  // Close on Escape key
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') handleClose()
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [handleClose])

  // Prevent body scroll while open
  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => { document.body.style.overflow = '' }
  }, [])

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === overlayRef.current) handleClose()
  }

  return (
    <div
      ref={overlayRef}
      onClick={handleOverlayClick}
      className={`project-overlay${closing ? ' closing' : ''}`}
      style={{
        position: 'fixed',
        inset: 0,
        backgroundColor: 'rgba(0,0,0,0.45)',
        backdropFilter: 'blur(6px)',
        WebkitBackdropFilter: 'blur(6px)',
        zIndex: 100,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <div
        className="project-viewer"
        style={{
          position: 'relative',
          width: 'clamp(300px, 86vw, 1100px)',
          maxHeight: '90vh',
          background: '#fff',
          borderRadius: '4px',
          overflow: 'hidden',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        {/* Close button */}
        <button
          onClick={handleClose}
          style={{
            position: 'absolute',
            top: 14,
            right: 16,
            zIndex: 10,
            background: 'rgba(0,0,0,0.5)',
            border: 'none',
            color: '#fff',
            width: 32,
            height: 32,
            borderRadius: '50%',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: 18,
            lineHeight: 1,
            fontFamily: "'Montserrat', sans-serif",
          }}
          aria-label="Close"
        >
          ×
        </button>

        {/* Scrollable content */}
        <div style={{ overflowY: 'auto', flex: 1 }}>
          {project.type === 'videos' ? (
            <VideosContent />
          ) : (
            <PresentationContent project={project} />
          )}
        </div>
      </div>
    </div>
  )
}

function PresentationContent({ project }: { project: (typeof PROJECTS)[0] }) {
  return (
    <div style={{ background: '#fff' }}>
      <img
        src={project.presentation ?? project.cover}
        alt={project.label}
        style={{ width: '100%', display: 'block' }}
      />
    </div>
  )
}

function VideosContent() {
  return (
    <div
      style={{
        padding: 'clamp(40px, 6vw, 72px) clamp(24px, 4vw, 56px)',
        background: '#fff',
      }}
    >
      <p
        style={{
          fontFamily: "'Montserrat', sans-serif",
          fontWeight: 900,
          fontSize: 'clamp(28px, 5vw, 60px)',
          letterSpacing: '0.06em',
          color: '#1a1a1a',
          marginBottom: 'clamp(24px, 4vw, 48px)',
        }}
      >
        VIDEOS
      </p>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: 'clamp(24px, 4vw, 40px)',
        }}
      >
        {VIDEO_PLACEHOLDERS.map((v, i) => (
          <div key={v.id}>
            {v.src ? (
              <video
                src={v.src}
                controls
                style={{ width: '100%', display: 'block', background: '#000' }}
              />
            ) : (
              /* Placeholder — replace with <video src={importedVideoModule} controls /> */
              <div
                style={{
                  width: '100%',
                  aspectRatio: '16/9',
                  background: '#111',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <span
                  style={{
                    fontFamily: "'Montserrat', sans-serif",
                    fontWeight: 600,
                    fontSize: 14,
                    color: 'rgba(255,255,255,0.35)',
                    letterSpacing: '0.1em',
                  }}
                >
                  VIDEO {i + 1} — add src to VIDEO_PLACEHOLDERS
                </span>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

// ─── CONNECT section ──────────────────────────────────────────────────────────
function ConnectSection() {
  const BEHANCE_URL = '#'
  const INSTAGRAM_URL = '#'
  const LINKEDIN_URL = '#'

  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

  // THAT'S metrics — used to pin ALL exactly below it
  const thatsTop = 'clamp(80px, 12vw, 140px)'
  const thatsFontSize = 'clamp(120px, 22vw, 320px)'
  // visual block height = fontSize × lineHeight(0.9)
  const thatsHeight = 'clamp(108px, 19.8vw, 288px)'

  return (
    <section
      id="connect"
      style={{
        position: 'relative',
        width: '100%',
        minHeight: '100vh',
        background: '#fff',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      {/* Connect nav — HOME only */}
      <nav
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: 'clamp(20px, 3vw, 36px) clamp(24px, 5vw, 72px)',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 10,
        }}
      >
        <button
          onClick={() => scrollTo('home')}
          style={{
            fontFamily: "'Montserrat', sans-serif",
            fontWeight: 600,
            fontSize: 'clamp(11px, 1.1vw, 14px)',
            letterSpacing: '0.12em',
            color: NAV_COLOR,
            cursor: 'pointer',
            background: 'none',
            border: 'none',
            padding: 0,
          }}
        >
          HOME
        </button>
      </nav>

      {/* THAT'S — left edge, below nav */}
      <div
        style={{
          position: 'absolute',
          top: thatsTop,
          left: 'clamp(-8px, -1vw, -4px)',
          lineHeight: 0.9,
        }}
      >
        <span
          style={{
            fontFamily: "'Montserrat', sans-serif",
            fontWeight: 900,
            fontSize: thatsFontSize,
            color: ACCENT_RED,
            letterSpacing: '-0.03em',
            display: 'block',
            lineHeight: 0.9,
          }}
        >
          {`THAT'S`}
        </span>
      </div>

      {/* ALL — top edge pinned exactly to bottom edge of THAT'S */}
      <div
        style={{
          position: 'absolute',
          top: `calc(${thatsTop} + ${thatsHeight} - clamp(16px, 2vw, 28px))`,
          right: 'clamp(-12px, -1.5vw, -4px)',
          lineHeight: 0.9,
        }}
      >
        <span
          style={{
            fontFamily: "'Montserrat', sans-serif",
            fontWeight: 900,
            fontSize: 'clamp(160px, 30vw, 440px)',
            color: ACCENT_BLUE,
            letterSpacing: '-0.03em',
            display: 'block',
            lineHeight: 0.9,
          }}
        >
          ALL
        </span>
      </div>

      {/* Bottom bar */}
      <div
        style={{
          position: 'absolute',
          bottom: 'clamp(16px, 3vw, 36px)',
          left: 0,
          right: 0,
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '0 clamp(24px, 5vw, 72px)',
          zIndex: 2,
        }}
      >
        <span
          style={{
            fontFamily: "'Montserrat', sans-serif",
            fontWeight: 600,
            fontSize: 'clamp(11px, 1.1vw, 14px)',
            letterSpacing: '0.1em',
            color: NAV_COLOR,
          }}
        >
          2026
        </span>
        <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
          {/* Behance */}
          <a href={BEHANCE_URL} target="_blank" rel="noopener noreferrer" aria-label="Behance">
            <SocialIcon type="behance" />
          </a>
          {/* Instagram */}
          <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <SocialIcon type="instagram" />
          </a>
          {/* LinkedIn */}
          <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <SocialIcon type="linkedin" />
          </a>
        </div>
      </div>
    </section>
  )
}

function SocialIcon({ type }: { type: 'behance' | 'instagram' | 'linkedin' }) {
  const size = 40
  const iconColor = NAV_COLOR
  const bg = 'rgba(107, 122, 201, 0.12)'

  return (
    <div
      style={{
        width: size,
        height: size,
        borderRadius: 8,
        background: bg,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        transition: 'background 0.2s',
      }}
      onMouseEnter={e => ((e.currentTarget as HTMLElement).style.background = 'rgba(107,122,201,0.25)')}
      onMouseLeave={e => ((e.currentTarget as HTMLElement).style.background = bg)}
    >
      {type === 'behance' && (
        <svg width="20" height="14" viewBox="0 0 20 14" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M7.3 6.4C8.1 6.1 8.7 5.3 8.7 4.4 8.7 2.7 7.4 1.5 5.7 1.5H0V12.5H6C7.9 12.5 9.4 11.2 9.4 9.4 9.4 8.1 8.5 7 7.3 6.4ZM2.5 3.7H5.4C6.1 3.7 6.6 4.2 6.6 4.8 6.6 5.4 6.1 5.9 5.4 5.9H2.5V3.7ZM5.7 10.3H2.5V8H5.7C6.5 8 7.1 8.5 7.1 9.2 7.1 9.9 6.5 10.3 5.7 10.3Z" fill={iconColor}/>
          <path d="M15 3.5C12.5 3.5 10.5 5.5 10.5 8C10.5 10.5 12.5 12.5 15 12.5C16.9 12.5 18.5 11.4 19.2 9.8H17C16.6 10.4 15.8 10.8 15 10.8 13.8 10.8 12.8 9.9 12.6 8.8H19.4C19.5 8.5 19.5 8.3 19.5 8 19.5 5.5 17.5 3.5 15 3.5ZM12.6 7.2C12.8 6.1 13.8 5.2 15 5.2 16.2 5.2 17.2 6.1 17.4 7.2H12.6Z" fill={iconColor}/>
          <rect x="12.5" y="1" width="5" height="1.5" rx="0.75" fill={iconColor}/>
        </svg>
      )}
      {type === 'instagram' && (
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="1" y="1" width="16" height="16" rx="4.5" stroke={iconColor} strokeWidth="1.7"/>
          <circle cx="9" cy="9" r="3.5" stroke={iconColor} strokeWidth="1.7"/>
          <circle cx="13.5" cy="4.5" r="1" fill={iconColor}/>
        </svg>
      )}
      {type === 'linkedin' && (
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="1" y="1" width="16" height="16" rx="3.5" stroke={iconColor} strokeWidth="1.7"/>
          <circle cx="5.5" cy="6.5" r="1" fill={iconColor}/>
          <rect x="4.5" y="8.5" width="2" height="5" rx="0.5" fill={iconColor}/>
          <path d="M8.5 8.5H10.5V9.3C10.9 8.8 11.6 8.5 12.3 8.5 13.8 8.5 14.5 9.4 14.5 11V13.5H12.5V11.2C12.5 10.5 12.1 10 11.5 10 10.9 10 10.5 10.5 10.5 11.2V13.5H8.5V8.5Z" fill={iconColor}/>
        </svg>
      )}
    </div>
  )
}

// ─── Root App ─────────────────────────────────────────────────────────────────
export default function App() {
  const [activeProject, setActiveProject] = useState<string | null>(null)

  return (
    <div style={{ fontFamily: "'Montserrat', sans-serif" }}>
      <HomeSection />
      <AboutSection />
      <WorkSection onOpenProject={setActiveProject} />
      <ConnectSection />

      {activeProject && (
        <ProjectViewer
          projectId={activeProject}
          onClose={() => setActiveProject(null)}
        />
      )}
    </div>
  )
}
