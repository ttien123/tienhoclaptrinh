import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

import styles from './AccountPreview.module.scss';
import Button from '~/components/Button/Button';

const cx = classNames.bind(styles);

function AccountPreview() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('header')}>
                <img
                    className={cx('avatar')}
                    src="https://p16-sign-useast2a.tiktokcdn.com/tos-useast2a-avt-0068-giso/9b7842c96baf5712e970ff89d4fc7ea4~c5_100x100.jpeg?x-expires=1686121200&x-signature=KvnLwTvJHPGAQfh5rl8QwyreKt8%3D"
                    alt=""
                />
                <div>
                    <Button className={cx('follow-btn')} primary>
                        Follow
                    </Button>
                </div>
            </div>

            <div className={cx('body')}>
                <p className={cx('nickname')}>
                    <strong>quoc nguyen phu</strong>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                </p>
                <p className={cx('name')}>Quooc nguyen phu</p>
                <p className={cx('analytics')}>
                    <strong className={cx('value')}>8.2M </strong>
                    <span className={cx('label')}>Follower</span>
                    <strong className={cx('value')}>8.2M </strong>
                    <span className={cx('label')}>Likes</span>
                </p>
            </div>
        </div>
    );
}

export default AccountPreview;
