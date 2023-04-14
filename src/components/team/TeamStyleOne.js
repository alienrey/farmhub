import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaPinterestP } from 'react-icons/fa';
import { v4 as uuidv4 } from 'uuid';
import TeamStyleOneImg1 from '../../assets/images/team/1.png';
import TeamStyleOneImg2 from '../../assets/images/team/2.png';
import TeamStyleOneImg3 from '../../assets/images/team/3.png';

import alan from '../../assets/bg/alan.png'
import diouf from '../../assets/bg/diouf.jpg'
import bryan from '../../assets/bg/bryan.jpg'
import jay from '../../assets/bg/jay.jpg'
import rm from '../../assets/bg/rm.jpg'




const HomeTeamTwoData = [
    {
        id: uuidv4(),
        img: bryan,
        name: 'Bryan Paul Roy',
        position: 'B.S. ECE',
        fbLink: '/',
        twitterLink: '/',
        instagramLink: '/',
        pinterestLink: '/',
    },

    {
        id: uuidv4(),
        img: rm,
        name: 'Ritchel Mae Suficiencia',
        position: 'B.S. ECE',
        fbLink: '/',
        twitterLink: '/',
        instagramLink: '/',
        pinterestLink: '/',
    },

    {
        id: uuidv4(),
        img: diouf,
        name: 'Diouf Daven Juntado',
        position: 'B.S. ECE',
        fbLink: '/',
        twitterLink: '/',
        instagramLink: '/',
        pinterestLink: '/',
    },
    {
        id: uuidv4(),
        img: alan,
        name: 'Alanray Elangos',
        position: 'B.S. SE',
        fbLink: '/',
        twitterLink: '/',
        instagramLink: '/',
        pinterestLink: '/',
    },
    {
        id: uuidv4(),
        img: jay,
        name: 'Jay Bandiola',
        position: 'B.S. SE',
        fbLink: '/',
        twitterLink: '/',
        instagramLink: '/',
        pinterestLink: '/',
    },

];

const TeamStyleOneItem = ({ img, name, position, fbLink, twitterLink, instagramLink, pinterestLink }) => {
    return (
        <>
            <div className="col-xl-4 col-lg-4 col-md-4">
                <div className="single-team-style-1 text-center">
                    <div className="single-team-style-1-img">
                        <img src={img} alt="" />
                        <div className="team-social-style-1">
                            <a href={fbLink}><FaFacebookF /></a>
                            <a href={twitterLink}><FaTwitter /></a>
                            <a href={instagramLink}><FaInstagram /></a>
                            <a href={pinterestLink}><FaPinterestP /></a>
                        </div>
                    </div>
                    <h4>{name}</h4>
                    <span>{position}</span>
                </div>
            </div>
        </>
    )
}

const TeamStyleOne = () => {
    return (
        <>
            <div className="team-area white-bg pt-110 pb-110">
                <div className="container">
                    <div className="row justify-content-center"> {/* Add justify-content-center class */}
                        <div className="col-xl-12">
                            <div className="section-title text-center mb-70">
                                <span>Advanto</span>
                                <h2>The Team Behind FarmHub</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        {HomeTeamTwoData.map((data) => (
                            <TeamStyleOneItem
                                key={data.id}
                                img={data.img}
                                name={data.name}
                                position={data.position}
                                fbLink={data.fbLink}
                                twitterLink={data.twitterLink}
                                instagramLink={data.instagramLink}
                                pinterestLink={data.pinterestLink}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}



export default TeamStyleOne;