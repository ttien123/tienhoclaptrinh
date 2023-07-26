import config from '~/config';
import styles from './Sidebar.module.scss';
import classNames from 'classnames/bind';
import Menu, { MenuItem } from './Menu';
import {
    HomeIcon,
    HomeActiveIcon,
    UserGroupIcon,
    UserGroupActiveIcon,
    LiveIcon,
    LiveActiveIcon,
} from '~/components/Icon';
import SuggestedAccount from '~/components/SuggestedAccount/SuggestedAccount';

const cx = classNames.bind(styles);

function Sidebar() {
    return (
        <aside className={cx('wrapper')}>
            <Menu>
                <MenuItem
                    title="For Your"
                    activeIcon={<HomeActiveIcon />}
                    icon={<HomeIcon />}
                    to={config.routes.home}
                ></MenuItem>
                <MenuItem
                    title="Following"
                    activeIcon={<UserGroupActiveIcon />}
                    icon={<UserGroupIcon />}
                    to={config.routes.following}
                ></MenuItem>
                <MenuItem
                    title="Live"
                    activeIcon={<LiveActiveIcon />}
                    icon={<LiveIcon />}
                    to={config.routes.live}
                ></MenuItem>
            </Menu>

            <SuggestedAccount label="Suggested accounts" />
            {/* <SuggestedAccount label="Following accounts" /> */}
        </aside>
    );
}

export default Sidebar;
