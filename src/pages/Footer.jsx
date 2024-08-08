import React from 'react'
import './style/footer.css'
import FooterNavItem from '../components/FooterNavItem'

function Footer() {
    const usefulLinks=[
        'Home',
        'Movies',
        'My List',
        'Terms of Service',
        'Provacy Policy'
    ]
    
  return (
    <footer id='footer' className='footer'>
        <div className="footer-top">
            <div className="container">
                <div className="row gy-4">
                    <div className="col-lg-5 col-md-12 footer-info">
                        <a href="/" className="logo d-flex align-items-center">
                            <span>KURONEMA</span>
                        </a>
                        <p>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum ullam totam neque voluptate debitis quisquam atque distinctio eos. Maxime magni ratione nobis error sint ullam minima consequatur. Corporis, quas autem?
                        </p>
                        <div className="social-links mt-3">
                            <a href="#" className="twitter">
                                <ion-icon name='logo-twitter'></ion-icon>
                            </a>
                            <a href="#" className="facebook">
                                <ion-icon name='logo-facebook'></ion-icon>
                            </a>
                            <a href="#" className="instagram">
                                <ion-icon name='logo-instagram'></ion-icon>
                            </a>
                            <a href="#" className="youtube">
                                <ion-icon name='logo-youtube'></ion-icon>
                            </a>
                        </div>
                    </div>

                    <div className="col-lg-2 col-6 footer-links">
                        <h4>Useful Links</h4>
                        <ul>
                            {usefulLinks.map(link=>(
                                <FooterNavItem key={link} name={link} />
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        
        <div className="container">
            <div className="copyright">
                &copy; Copyright{' '}
                <strong>
                    <span>Kuronema</span>
                </strong>
                . All Rights Reserved
            </div>
        </div>
    </footer>
  )
}

export default Footer
