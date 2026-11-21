type Props = {
  theme: "dark" | "light";
  id?: string;
  className?: string;
  children: React.ReactNode;
};

/**
 * Wraps a page section. `theme` tells the scroll controller whether the page
 * background should be dark or light while this section is in the middle of the
 * screen (see components/site/ThemeController.tsx).
 */
export function Section({ theme, id, className = "", children }: Props) {
  return (
    <section id={id} data-theme={theme} className={className}>
      {children}
    </section>
  );
}
