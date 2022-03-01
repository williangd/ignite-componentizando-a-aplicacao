interface ContentHeaderProps {
  title: string;
}

export function ContentHeader(props: ContentHeaderProps) {
  return (
    <header>
      <span className="category">
        Categoria:<span> {props.title}</span>
      </span>
    </header>
  );
}
