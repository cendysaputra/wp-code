# DESIGN.md

Sumber nilai desain. Semua diimplementasi sebagai token di `tokens.css`, jangan hardcode. Isi `TBD` sesuai desain project.

## Breakpoint
| Device | Range |
|---|---|
| Mobile | ≤767px |
| Tablet | 768-1024px |
| Desktop | ≥1025px |

## Grid 8
Semua size kelipatan 8 (spacing, size, font, line-height, radius). Kecuali border 1-2px.

## Section Spacing
| Token | Desktop | Tablet | Mobile |
|---|---|---|---|
| `--section-py` | 120px | 72px | 72px |
| `--section-px` | ikut container | 24px | 16px |

## Container
`--container`: TBD (contoh 1200px), di tengah.

## Spacing
`--space-1` 8px, `--space-2` 16px, `--space-3` 24px ... `--space-15` 120px (n × 8).

## Typography
Font heading: TBD. Font body: TBD. Weight: TBD (maks 3).

| Token | Desktop | Tablet | Mobile |
|---|---|---|---|
| `--fs-h1` | 64 | 48 | 40 |
| `--fs-h2` | 48 | 40 | 32 |
| `--fs-h3` | 32 | 32 | 24 |
| `--fs-h4` | 24 | 24 | 24 |
| `--fs-h5`, `--fs-h6`, `--fs-body` | 16 | 16 | 16 |

Line-height kelipatan 8. Class tampilan: `.text-h1` s/d `.text-h6`.

## Color
| Token | Nilai |
|---|---|
| `--color-primary` | TBD |
| `--color-secondary` | TBD |
| `--color-accent` | TBD |
| `--color-text` | TBD |
| `--color-text-muted` | TBD |
| `--color-bg` | TBD |
| `--color-surface` | TBD |
| `--color-border` | TBD |
| `--color-success` | TBD |
| `--color-warning` | TBD |
| `--color-error` | TBD |

Kontras teks min. WCAG AA (4.5:1).

## Lainnya
- Radius: 8, 16, 24
- Shadow, z-index, transition: TBD
- Touch target min. 48px
