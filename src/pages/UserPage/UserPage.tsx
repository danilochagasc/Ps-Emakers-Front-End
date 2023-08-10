import {Link} from 'react-router-dom';
import {VscSearch} from 'react-icons/vsc';
import {MdPeopleAlt} from 'react-icons/md';
import {FaPencil} from 'react-icons/fa';
import EmakersBannerPng from "../../assets/Logo_lateral_semfundo.png";
import "./UserPage.css";
function UserPage(){
    return(
        <div className='user-container'>
            <header>
                <div className='side-menu'>
                    <VscSearch />
                    <MdPeopleAlt />
                </div>

                
            </header>

            <main>

            </main>

        </div>

    )
}

export default UserPage;