import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
const cx = classNames.bind(styles);
function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <img
                className={cx('avatar')}
                src="https://scontent.fsgn8-4.fna.fbcdn.net/v/t1.6435-1/147841102_1395571914122450_3809531058482570653_n.jpg?stp=dst-jpg_s200x200_tt6&_nc_cat=107&ccb=1-7&_nc_sid=e99d92&_nc_ohc=LsRN4XfNYScQ7kNvgEEwJ1I&_nc_oc=AdgW_DJd2mziKMUkn1sNxmwhJvVCcpNoqTJfNv6UX1T2DFudHIrYGMSkLe3j7YALkDQ&_nc_zt=24&_nc_ht=scontent.fsgn8-4.fna&_nc_gid=Ac8m-rdMlDIXjQ9-lLH8Wzh&oh=00_AYAGhgsZF9W4VIuDNofgsvKLeEezJP31AKWM5xvrusz5zg&oe=67BB05BE"
                alt="Nguyen"
            />
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    <span>Nguyen</span>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                </h4>
                <span className={cx('username')}>nguyen</span>
            </div>
        </div>
    );
}

export default AccountItem;
