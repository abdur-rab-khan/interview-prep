interface IHeaderProps {
  title: string;
  description: string;
}

const Header = ({ title, description }: IHeaderProps) => (
  <header>
    <h2 className="text-xl text-white">{title}</h2>
    <p className="text-sm font-light text-white/70">{description}</p>
  </header>
);

export default Header;
