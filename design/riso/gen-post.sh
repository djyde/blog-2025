#!/bin/bash
# 给单篇文章生成配图：gemini-3.1-flash-image，以 b2-lamp-1.jpg 为风格参考。已有则跳过，失败不重试。
cd "$(dirname "$0")"
slug="$1"; subject="$2"
[ -f "posts/$slug-1.jpg" ] && exit 0
S="/Users/lutaonan/Library/Application Support/Claude/local-agent-mode-sessions/skills-plugin/b82ac423-018e-4df5-bfbc-1ff871d2e931/c216f693-19cc-491b-a477-4bfb915a2ca5/skills/laozhang-image/scripts/generate_image.py"
STYLE="Abstract risograph / screen print illustration. Bauhaus and constructivist composition: the subject is built only from flat geometric shapes — circles, capsules, bars, rectangles — no realistic detail, no outlines, no gradients. Limited palette of 3–4 flat spot colors on a solid ground. Visible paper grain, ink speckle, and slight misregistration between color layers, so edges show a thin offset of another ink. Generous empty space, one clear focal object, no people, no faces, no text.
Keep it very light and minimal: the shapes are small and thin, they cover less than 15% of the sheet, pale translucent inks, lots of bare paper. No border or frame.
Match the style, grain, palette and shape language of the reference image.
Palette: warm cream paper ground, pale rust, warm grey, a touch of soft orange.
Aspect: 4:3 landscape"
python3 "$S" --out-dir posts --name "$slug" --aspect-ratio 4:3 --resolution 1K --image b2-lamp-1.jpg --prompt "$STYLE
Subject: $subject" > "posts/$slug.log" 2>&1
echo "$slug: $(tail -1 posts/$slug.log)"
