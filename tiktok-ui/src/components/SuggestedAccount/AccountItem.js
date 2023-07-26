import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react/headless';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

import styles from './SuggestedAccount.module.scss';
import { Wrapper as PopperWrapper } from '~/components/Poper';
import AccountPreview from './AccountPreview/AccountPreview';

const cx = classNames.bind(styles);

function AccountItem() {
    const renderPreview = (props) => {
        return (
            <div tabIndex="-1" {...props}>
                <PopperWrapper>
                    <div className={cx('preview')}>
                        <AccountPreview />
                    </div>
                </PopperWrapper>
            </div>
        );
    };
    return (
        <div>
            <Tippy interactive offset={[-20, 0]} delay={[800, 0]} placement="bottom" render={renderPreview}>
                <div className={cx('account-item')}>
                    <img
                        className={cx('avatar')}
                        src="https://p16-sign-useast2a.tiktokcdn.com/tos-useast2a-avt-0068-giso/9b7842c96baf5712e970ff89d4fc7ea4~c5_100x100.jpeg?x-expires=1686121200&x-signature=KvnLwTvJHPGAQfh5rl8QwyreKt8%3D"
                        alt=""
                    />
                    <div className={cx('item-info')}>
                        <p className={cx('nickname')}>
                            <strong>quoc nguyen phu</strong>
                            <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                        </p>
                        <p className={cx('name')}>Quooc nguyen phu</p>
                    </div>
                </div>
            </Tippy>
        </div>
    );
}

export default AccountItem;
