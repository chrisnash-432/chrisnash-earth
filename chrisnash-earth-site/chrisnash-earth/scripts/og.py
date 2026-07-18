#!/usr/bin/env python3
"""Generate the default OG share image into public/og-default.png.
Runs in CI before the Astro build so the repo stays text-only."""
import math
from PIL import Image, ImageDraw, ImageFont

W, H = 1200, 630
img = Image.new('RGB', (W, H), '#F7F3EC')
d = ImageDraw.Draw(img)

for i in range(4):
    off = i * 28
    pts = []
    for x in range(-20, W + 21, 20):
        y = 440 + off + 40 * math.sin(x / 210) + 18 * math.sin(x / 90 + i)
        pts.append((x, y))
    d.line(pts, fill=(196, 203, 180), width=2)


def font(path, size):
    try:
        return ImageFont.truetype(path, size)
    except Exception:
        return ImageFont.load_default()


serif = font('/usr/share/fonts/truetype/dejavu/DejaVuSerif.ttf', 64)
serif_it = font('/usr/share/fonts/truetype/dejavu/DejaVuSerif-Italic.ttf', 64)
sans = font('/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf', 26)

d.text((80, 120), 'Chris Nash', font=serif, fill='#26281F')
d.text((80, 210), 'Inner & Outer Landscapes', font=serif_it, fill='#3E5C41')
d.text((80, 330), 'Seeding a regenerative culture, through restoration', font=sans, fill='#565A4B')
d.text((80, 368), 'of inner and outer landscapes.', font=sans, fill='#565A4B')
d.text((80, 520), 'CHRISNASH.EARTH', font=sans, fill='#7A5A24')

img.save('public/og-default.png')
print('og-default.png generated')
