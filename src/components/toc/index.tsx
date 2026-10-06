/*
 * @Author: kim
 * @Description: 目录
 */
import { useEffect, useState } from 'react';
import type { MarkdownHeading } from 'astro';
import classNames from 'classnames';

interface TocProps {
  className?: string;
  listClassName?: string;
  dataSource?: MarkdownHeading[];
}

/** 标题滚到视口顶部这个距离以内，就算“正在读” */
const ACTIVE_OFFSET = 120;

function useActiveSlug(slugs: string[]) {
  const [active, setActive] = useState<string>();

  useEffect(() => {
    let frame = 0;
    const update = () => {
      frame = 0;
      let current: string | undefined;
      for (const slug of slugs) {
        const el = document.getElementById(slug);
        if (el && el.getBoundingClientRect().top <= ACTIVE_OFFSET) current = slug;
      }
      setActive(current);
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
      cancelAnimationFrame(frame);
    };
  }, [slugs.join()]);

  return active;
}

function Toc(props: TocProps) {
  const { dataSource = [], className, listClassName } = props;
  const items = dataSource.filter((item) => item.depth > 1 && item.depth < 4);
  const active = useActiveSlug(items.map((item) => item.slug));

  if (!items.length) return null;

  return (
    <div className={className}>
      <nav className="flex h-full w-full flex-col">
        <div className="mb-3 text-xs tracking-[0.12em] text-olive-9">目录</div>
        <ul
          className={classNames(
            'min-h-0 overflow-y-auto border-l border-olive-6 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden',
            listClassName,
          )}
        >
          {items.map((item) => {
            const isActive = item.slug === active;
            return (
              <li key={item.slug} className="relative">
                {isActive && (
                  // 灯光橙 + 锈红错位，延续 riso 套色偏移
                  <span className="absolute -left-px top-1.5 h-[calc(100%-0.75rem)] w-[3px] bg-lamp shadow-[1.5px_1px_0_var(--color-rust)]" />
                )}
                <a
                  href={`#${item.slug}`}
                  className={classNames(
                    'block py-1 leading-snug transition-colors hover:text-olive-12',
                    item.depth === 2 ? 'pl-4 text-[0.8125rem]' : 'pl-7 text-xs',
                    isActive ? 'text-olive-12' : item.depth === 2 ? 'text-olive-10' : 'text-olive-9',
                  )}
                >
                  {item.text}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
}

export default Toc;
