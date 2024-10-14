type IconCardProps = {
  icon?: React.ReactNode;
  title?: string;
  text?: string;
};

const IconCard = ({ icon, title, text }: IconCardProps) => {
  return (
    <div style={{ textAlign: 'center', flex: 1, margin: '15px' }}>
      {icon && icon}
      {title && <h4>{title}</h4>}
      {text && <p style={{ padding: '0 20px' }}>{text}</p>}
    </div>
  );
};

export default IconCard;
