import React from 'react';
import './Info.scss';
import avt from '../../assets/images/cv.jpg'
import { FaUserAlt, FaBirthdayCake, FaPen, FaHome } from 'react-icons/fa';

function Info() {
    return (
        <div className="info">
            <div className="info--chung">
                <img src={avt} alt="Avatar" className="info--chung-avt"></img>
                <div className="info--chung-title">
                    <div><FaPen style={{ paddingRight: "5px", opacity: "0.5" }} /> Lê Hữu Lộc</div>
                    <div><FaUserAlt style={{ paddingRight: "5px", opacity: "0.5" }} /> Nam</div>
                    <div><FaBirthdayCake style={{ paddingRight: "5px", opacity: "0.5" }} /> 27-11-99</div>
                    <div><FaHome style={{ paddingRight: "5px", opacity: "0.5" }} />Hoài Ân - Bình Định</div>
                </div>
            </div>
            <div className="info-work">
                <h4>Học vấn</h4>
                <div className="info-work__child">
                    <p>Duy Tân University</p>
                    <p>Kỹ sư phần mềm</p>
                </div>
                <div className="info-work__skills">
                    <h4>Kỹ năng</h4>
                    <p>HTML, CSS, JAVASCRIPT, REACTJS</p>
                </div>
                <div className="info-work__skills">
                    <h4>Liên hệ</h4>
                    <p>Phone: 0983395820</p>
                    <p>Email: huuloc271199@gmail.com</p>
                </div>
            </div>
        </div>
    );
}

export default Info;