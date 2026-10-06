"""把 design/riso/posts/<slug>-1.jpg 导入 src/assets/covers/<slug>.jpg：
缩到 1000px，并把每张图的纸色校正为页面底色 #f9f3de（olive-2），让配图无缝“印”在页面上。"""
import glob, os, sys
from PIL import Image

TARGET = (0xF9, 0xF3, 0xDE)
root = os.path.dirname(os.path.abspath(__file__))
out = os.path.join(root, '../../src/assets/covers')

def ground(im):
    w, h = im.size
    px = [im.getpixel((x, y)) for x in range(4, w, 23) for y in range(4, h, 19)]
    px.sort(key=sum)
    return px[int(len(px) * 0.7)]  # 纸占画面绝大部分，取偏亮的分位数

def convert(src, dst):
    im = Image.open(src).convert('RGB')
    im.thumbnail((1000, 1000))
    g = ground(im)
    lut = []
    for c in range(3):
        k = TARGET[c] / g[c]
        lut += [min(255, round(v * k)) for v in range(256)]
    im.point(lut).save(dst, quality=80, optimize=True)

for f in sorted(glob.glob(os.path.join(root, 'posts/*-1.jpg'))):
    slug = os.path.basename(f)[:-6]
    convert(f, os.path.join(out, slug + '.jpg'))
convert(os.path.join(root, 'b2-lamp-1.jpg'), os.path.join(root, '../../src/assets/riso/lamp.jpg'))
print(len(glob.glob(os.path.join(out, '*.jpg'))), 'covers')
