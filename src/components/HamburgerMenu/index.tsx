import { useCallback, useState } from 'react';
import HamburgerIcon from '../HamburgerIcon';
import Sidebar from '../Sidebar';
import { Props } from '../NavBar';
import { useCheckClickOutside } from '../../layouts/utils';

const HamburgerMenu = ({
  className,
  pages,
}: {
  className?: string;
  pages: Props[];
}) => {
  const [open, setOpen] = useState(false);
  const onToggleSidebar = useCallback(() => setOpen(!open), [open]);
  const onClose = useCallback(() => setOpen(false), []);
  const ref = useCheckClickOutside(onClose);

  return (
    <div className={className} ref={ref}>
      <HamburgerIcon open={open} onToggleSidebar={onToggleSidebar} />
      <Sidebar options={pages} open={open} onClose={onClose} />
    </div>
  );
};
export default HamburgerMenu;
