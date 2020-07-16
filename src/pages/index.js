import React from 'react';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './../app.css';
import './../style';
import Carrousel from './carrousel';

import {FaHeart, FaRegCalendarAlt, FaInstagram, FaWhatsapp, FaFacebookF, FaLinkedinIn,FaRegCommentAlt, FaChevronRight,FaUserAlt, FaRegEnvelope, FaLock, FaCheckCircle} from 'react-icons/fa'
function Home() {
  return (
    <>
        <header>
            <div className="logo">
                  <img src="http://landrick.react.themesbrand.com/static/media/logo-light.60e71704.png"/>
            </div>
        </header>
        <div className="content">
            
            <div className="title">
                <h1>Starting in Strong Way</h1>
            </div>
            <div className="subtitle">
                <h4>Launch your campaign and benefit from our expertise on designing and managing conversion centered bootstrap4 html page.</h4>
            </div>

            <div className="getstarted">
                <Button variant="primary" size="lg" active>
                  Get Started
                </Button>
                  
            </div>
        </div>
        <section>
            <div className="overview">
                <h1>What We Do ?</h1>
                <p>Start working with Landrick that can provide everything you need to generate awareness, drive traffic, connect</p>
            </div>

            <div className="template_cards">
                  <div className="card">
                      <img className="logo" src="http://landrick.react.themesbrand.com/static/media/pen.18752fed.svg" alt="d" />
                      <div className="sombra"></div>
                      <h5>Design & Development</h5>
                      <p> Nisi aenean vulputate eleifend tellus vitae eleifend enim a Aliquam aenean elementum semper. </p>
                  </div>
                  <div className="card">
                      <img className="logo" src="http://landrick.react.themesbrand.com/static/media/video.64e8f287.svg" alt="d" />
                      <div className="sombra"></div>
                      <h5>Management & Marketing</h5>
                      <p> Allegedly, a Latin scholar established the origin of the text by established compiling unusual word.</p>
                  </div>
                  <div className="card">
                      <img className="logo" src="http://landrick.react.themesbrand.com/static/media/intellectual.b138e111.svg" alt="d" />
                      <div className="sombra"></div>
                      <h5>Stratagy & Research</h5>
                      <p> It seems that only fragments of the original text remain in the Lorem Ipsum fragments texts used today. </p>
                  </div>
                  <div className="card">
                      <img className="logo" src="http://landrick.react.themesbrand.com/static/media/user.b6ebbc5e.svg" alt="d" />
                      <div className="sombra"></div>
                      <h5>Easy To Use</h5>
                      <p>Nisi aenean vulputate eleifend tellus vitae eleifend enim a Aliquam aenean elementum semper. </p>
                  </div>
                  <div className="card">
                      <img className="logo" src="http://landrick.react.themesbrand.com/static/media/calendar.3f528a38.svg" alt="d" />
                      <div className="sombra"></div>
                      <h5>Daily Reports</h5>
                      <p> Allegedly, a Latin scholar established the origin of the text by compiling unusual established word. </p>
                  </div>
                  <div className="card">
                      <img className="logo" src="http://landrick.react.themesbrand.com/static/media/sand-clock.a62cd0a5.svg" alt="d" />
                      <div className="sombra"></div>
                      <h5>Real Time Zone</h5>
                      <p>It seems that only fragments of the original text remain in the Lorem Ipsum texts used fragments today.</p>
                  </div>
                 
            </div>

            <div className="contact">
                  <div className="legenda">
                      <h3>Speed up your development <br/> with Landrick.</h3>
                      <p>Using Landrick to build your site means never worrying about designing another page or cross browser compatibility. Our ever-growing library of components and pre-designed layouts will make your life easier.</p>

                      <ul>
                        <li> <FaCheckCircle/> Digital Marketing Solutions for Tomorrow</li>
                        <li> <FaCheckCircle/> Our Talented & Experienced Marketing Agency</li>
                        <li> <FaCheckCircle/> Create your own skin to match your brand</li>
                      </ul>

                      <a href="#">Leia mais</a>
                  </div>
                  <div className="formulario">
                        <img  src="http://landrick.react.themesbrand.com/static/media/Mobile_notification_SVG.c7186b93.svg" alt="kh"/>
                        <form>
                            <label htmlFor="name"> Name: <span>*</span>
                                <div className="input_campo">
                                    <span><FaUserAlt/></span>
                                    <input type="text" id="name" name="name" className="cp_normal"/>
                                </div> 
                            </label>
                            <label htmlFor="email"> Email: <span>*</span>
                                <div className="input_campo">
                                    <span><FaRegEnvelope/></span>
                                    <input type="text" id="email" name="email" className="cp_normal"/>
                                </div> 
                               
                            </label>
                            <label htmlFor="senha"> Senha: <span>*</span>
                                <div className="input_campo">
                                    <span><FaLock/></span>
                                    <input type="text" id="senha" name="senha" className="cp_normal"/>
                                </div>
                               
                            </label>
                            <Button variant="primary" size="lg" className="btn_contato">
                                Enviar contato
                            </Button>
                        </form>
                  </div>
            </div>
            
            <div className="carrossel">
                <Carrousel/>
            </div>

            <div className="news">
                    <h4>Latest News</h4>
                    <p>Start working with Landrick that can provide everything you need to generate awareness, drive traffic, connect. </p>
                  <div className="content_news">
                      <div className="new-card">
                          <div className="img_card">
                                <img src="http://landrick.react.themesbrand.com//static/media/01.716ab2cf.jpg"  alt="kh"/>

                                <div className="infor-card">
                                    <span><FaUserAlt/>  Calvin Carlo</span>
                                    <span> <FaRegCalendarAlt />  13th August, 2019</span>
                                </div>
                          </div>                          

                          <div className="footer-card">
                                <h3>Design your apps in your own way</h3>
                                <div className="interacoes-card">
                                        <div className="opcoes">
                                            <span><FaHeart/> 33</span>
                                            <span> <FaRegCommentAlt /> 08</span>
                                        </div>
                                        <a href="#">Read <FaChevronRight/></a>
                                </div>
                          </div>
                      </div>
                      <div className="new-card">
                          <div className="img_card">
                                <img src="http://landrick.react.themesbrand.com//static/media/01.716ab2cf.jpg"  alt="kh"/>

                                <div className="infor-card">
                                    <span><FaUserAlt/>  Calvin Carlo</span>
                                    <span> <FaRegCalendarAlt />  13th August, 2019</span>
                                </div>
                          </div>                          

                          <div className="footer-card">
                                <h3>Design your apps in your own way</h3>
                                <div className="interacoes-card">
                                        <div className="opcoes">
                                            <span><FaHeart/> 33</span>
                                            <span> <FaRegCommentAlt /> 08</span>
                                        </div>
                                        <a href="#">Read <FaChevronRight/></a>
                                </div>
                          </div>
                      </div>
                      <div className="new-card">
                          <div className="img_card">
                                <img src="http://landrick.react.themesbrand.com//static/media/01.716ab2cf.jpg"  alt="kh"/>

                                <div className="infor-card">
                                    <span><FaUserAlt/>  Calvin Carlo</span>
                                    <span> <FaRegCalendarAlt />  13th August, 2019</span>
                                </div>
                          </div>                          

                          <div className="footer-card">
                                <h3>Design your apps in your own way</h3>
                                <div className="interacoes-card">
                                        <div className="opcoes">
                                            <span><FaHeart/> 33</span>
                                            <span> <FaRegCommentAlt /> 08</span>
                                        </div>
                                        <a href="#">Read <FaChevronRight/></a>
                                </div>
                          </div>
                      </div>
                  </div>
            </div>
            
            <div className="contact-bottom">
                    <h4>Schedule a demo with us</h4>
                    <p>Start working with Landrick that can provide everything you need to generate awareness, drive traffic, connect. </p>                

                    <form>
                        <div className="input_campo">
                            <input type="text" id="email-bottom" name="email-bottom" className="cp_normal"/>
                        </div> 
                            <Button variant="primary" size="lg" className="btn_contato2">
                                Inscrever-se
                            </Button>
                    </form>

            </div>
        </section>

        <div className="footer-page">
            <div>
                <div className="efeito">
                    <div className="logo">
                        <img src="http://landrick.react.themesbrand.com/static/media/logo-light.60e71704.png"/>
                    </div>
                    <p>Start working with Landrick that can provide everything you need to generate awareness, drive traffic, connect.</p>

                    <div className="redessociais">
                        <div className="rede">
                            <FaInstagram/>
                        </div>

                        <div className="rede">
                            <FaWhatsapp/>
                        </div>

                        <div className="rede">
                            <FaFacebookF/>
                        </div>

                        <div className="rede">
                            <FaLinkedinIn/>
                        </div>
                    </div>
                </div>
                <div className="efeito">
                    <h4>Company</h4>
                    <ul>
                        <li><FaChevronRight/><a href="#">About us</a></li>
                        <li><FaChevronRight/><a href="#">Services</a></li>
                        <li><FaChevronRight/><a href="#">Team</a></li>
                    </ul>
                </div>
                <div className="efeito">
                    <h4>Usefull Links</h4>
                    <ul>
                        <li><FaChevronRight/><a href="#">Terms of Services</a></li>
                        <li><FaChevronRight/><a href="#"> Privacy Policy</a></li>
                    </ul>
                </div>
                <div className="efeito">
                        <h4>Newsletter</h4>
                        <p>Sign up and receive the latest tips via email.</p>
                        <div className="formulario">
                            <form>
                                <label htmlFor="email"> Email: <span>*</span>
                                    <div className="input_campo">
                                        <span><FaRegEnvelope/></span>
                                        <input type="text" id="email" name="email" className="cp_normal"/>
                                    </div> 
                                
                                </label>
                                <Button variant="primary" size="lg" className="btn_contato3">
                                    Enviar contato
                                </Button>
                            </form>
                    </div>
                </div>
            </div>           

        </div>

        <div className="developer">
                <h6> © 2020-21 Landrick. Develop by <span>LACASI. </span></h6>
        </div>
        
    </>
  );
}

export default Home;
