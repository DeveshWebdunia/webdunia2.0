import React, { useState } from 'react';
import './Cricketupdate.scss';
import { Accordion, Card, Button } from 'react-bootstrap';
import team1 from '../../assets/img/sa.png';
import team2 from '../../assets/img/pak.png';

import batting from '../../assets/img/batting.png';
import ball from '../../assets/img/ball.png';

export default function CricketUpdate() {
    const [activeId, setActiveId] = useState('0');

    function toggleActive(id) {
        if (activeId === id) {
            setActiveId(null);
        } else {
            setActiveId(id);
        }
    }
    return (
        <>
            <div className="cricketupdate_panel">
                <div className="c_u_p_head">
                    <h3>Cricket Update</h3>
                    <span className="cricklive">Live</span>
                </div>
                <div className="c_u_p_body">

                    <Accordion className="cricket_accordion" defaultActiveKey={activeId}>

                        <div className={activeId === '0' ? 'panel-wrap active-panel' : 'panel-wrap'}>
                            <div className="panel-header">
                                <Accordion.Toggle onClick={() => toggleActive('0')} variant="link" eventKey="0">
                                    SA Vs PAK, South Africa tour of Pakistan, Test series 2021
    </Accordion.Toggle>
                            </div>
                            <Accordion.Collapse eventKey="0">
                                <div className="panel-body">

                                    <div className="team_block">
                                        <div className="team_b_l">
                                            <span><img src={team2} /></span>
                                        </div>
                                        <div className="team_b_r">
                                            <div className="team_inf_col">
                                                <h2>Pakistan</h2>
                                                <div className="team_score">
                                                    <b>90/3</b> (22.5)
                                                </div>
                                            </div>
                                            <div className="team_inf_col">
                                                <div className="team_score">
                                                    1st Inns: 378/10
                                                </div>
                                            </div>
                                        </div>
                                        <div className="team_player">
                                            <span><img src={batting} /></span> Fawad Alam : 04 * |  Azhar Ali : 13
                                        </div>
                                    </div>

                                    <div className="team_block">
                                        <div className="team_b_l">
                                            <span><img src={team1} /></span>
                                        </div>
                                        <div className="team_b_r">
                                            <div className="team_inf_col">
                                                <h2>South Africa</h2>
                                                <div className="team_score">
                                                    <b>2nd Inns: 245/10</b>
                                                </div>
                                            </div>
                                            <div className="team_inf_col">
                                                <div className="team_score">
                                                    1st Inns: 220/10
                                                </div>
                                            </div>
                                        </div>
                                        <div className="team_player">
                                            <span><img src={ball} /></span> Bowler : Keshav Maharaj
                                        </div>
                                    </div>
                                    <div className="text-center team_status">
                                        <p>Pakistan won by 7 wickets</p>
                                        <a href="#" className="fullscore_btn">Full Scorecard</a>
                                    </div>

                                </div>
                            </Accordion.Collapse>
                        </div>

                        <div className={activeId === '1' ? 'panel-wrap active-panel' : 'panel-wrap'}>
                            <div className="panel-header">
                                <Accordion.Toggle onClick={() => toggleActive('1')} variant="link" eventKey="1">
                                    SA Vs PAK, South Africa tour of Pakistan, Test series 2021
    </Accordion.Toggle>
                            </div>

                            <Accordion.Collapse eventKey="1">
                                <div className="panel-body">

                                    <div className="team_block">
                                        <div className="team_b_l">
                                            <span><img src={team2} /></span>
                                        </div>
                                        <div className="team_b_r">
                                            <div className="team_inf_col">
                                                <h2>Pakistan</h2>
                                                <div className="team_score">
                                                    <b>90/3</b> (22.5)
            </div>
                                            </div>
                                            <div className="team_inf_col">
                                                <div className="team_score">
                                                    1st Inns: 378/10
            </div>
                                            </div>
                                        </div>
                                        <div className="team_player">
                                            <span><img src={batting} /></span> Fawad Alam : 04 * |  Azhar Ali : 13
    </div>
                                    </div>

                                    <div className="team_block">
                                        <div className="team_b_l">
                                            <span><img src={team1} /></span>
                                        </div>
                                        <div className="team_b_r">
                                            <div className="team_inf_col">
                                                <h2>South Africa</h2>
                                                <div className="team_score">
                                                    <b>2nd Inns: 245/10</b>
                                                </div>
                                            </div>
                                            <div className="team_inf_col">
                                                <div className="team_score">
                                                    1st Inns: 220/10
            </div>
                                            </div>
                                        </div>
                                        <div className="team_player">
                                            <span><img src={ball} /></span> Bowler : Keshav Maharaj
    </div>
                                    </div>

                                </div>
                            </Accordion.Collapse>
                        </div>

                    </Accordion>

                </div>
            </div>
        </>
    )

}